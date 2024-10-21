import { BlogModel, Blogs } from "../blog/Blog.model";
import { CounterModel } from "../counter.model";

export interface AppStateModel {
    counter: CounterModel,
    blog: Blogs
}