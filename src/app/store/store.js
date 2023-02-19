import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../../features/card/cartSlice";
import filterSlice from "../../features/filter/filterSlice";
import logger from "redux-logger";
import productsSlice from "../../features/products/productsSlice";
const store = configureStore({
    reducer:{
        cart:cartSlice,
        filter:filterSlice,
        products: productsSlice,
    },
    middleware:(getDefaultMiddleWare)=> getDefaultMiddleWare().concat(logger)
});

export default store;

// import {configureStore} from "@reduxjs/toolkit";
// import cartSlice from "../../features/card/cartSlice";

// const store = configureStore({
//     reducer:{
//         cart:cartSlice,
//     },
// });

// export default store;