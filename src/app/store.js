import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "../blogs/blogSlice";




export const store = configureStore({
  reducer:{
    [blogSlice]: blogSlice.reducer

  }
}); 