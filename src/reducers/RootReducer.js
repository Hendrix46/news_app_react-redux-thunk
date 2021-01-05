import {combineReducers} from "redux";
import PostsReducer from "./posts/PostsReducer";
const RootReducer= combineReducers({
        posts: PostsReducer
});

export default RootReducer