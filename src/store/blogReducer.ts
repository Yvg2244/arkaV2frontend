import { createSlice } from "@reduxjs/toolkit";
const initalState:any={
    blogId:'',
    blogCategory:'',
    allBlogs:[]
}
export const blogSlice = createSlice({
    name: "selectedBlog",
    initialState: initalState,
    reducers: {
        setBlogId(state, action) {
            state.blogId = action.payload.blogId;
        },
        setBlogCategory(state, action) {
            state.blogCategory = action.payload.BlogCategory;
        },
        setBlog(state, action) {
            state.allBlogs = action.payload;
        },
    },
});
export const { setBlogId, setBlogCategory,setBlog } = blogSlice.actions;
export default blogSlice.reducer;