import { blogReducer } from "../blog/Blog.reducers";
import { counterReducer } from "../counter.reducer";

export const AppState= {
    counter: counterReducer,
    blog: blogReducer
}