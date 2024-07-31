import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  selectedBlog  from "./blogReducer";
const mainReducer=combineReducers({
    updateSelectedBlog:selectedBlog
})
 const store=configureStore({
    reducer:mainReducer
})
export default store