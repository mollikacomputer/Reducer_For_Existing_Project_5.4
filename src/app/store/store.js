import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../../features/card/cartSlice";
import filterSlice from "../../features/filter/filterSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        filter:filterSlice,
    }
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