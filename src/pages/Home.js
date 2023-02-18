import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {toggleBrand, toggle, stock} from "../features/filter/filterSlice";
const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const activeClass = "text-white bg-indigo-500 border-white";
  const filter = useSelector(state=> state.filter);
  const {brands, state, stock} = filter;
  useEffect(()=>{
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data.data))
  },[]);

    console.log(products);
    let content;

    if (products.length) {
      content = products.map((product) => (
        <ProductCard key={product.model} product={product} />
      ));
    }
  
    if (products.length && (stock || brands.length)) {
      content = products
        .filter((product) => {
          if (stock) {
            return product.status === true;
          }
          return product;
        })
        .filter((product) => {
          if (brands.length) {
            return brands.includes(product.brand);
          }
          return product;
        })
        .map((product) => <ProductCard key={product.model} product={product} />);
    }
  return (
    <>
     <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'> 
      {
        products.map((product)=> <ProductCard key={product._id} product={product} /> )
      }
    </div>
      </>
  );
};

export default Home;
