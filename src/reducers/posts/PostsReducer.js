import {GET_NEWS, START_FETCHING_HEADLINES, STOP_FETCHING_HEADLINES} from "../../actions/types/Types";

const initialState={
  load: false,
  news: []
};



export const PostsReducer =(state= initialState, action)=>{

    const {type, payload}=action;

    switch (type) {
        case START_FETCHING_HEADLINES:
            return{
                ...state,
                load: payload
            };
        case STOP_FETCHING_HEADLINES:
            return {
                ...state,
                load: payload
            };
        case GET_NEWS:
            return {
                ...state,
                load: false,
                news: payload
            };
        default: return state;

    }

};

export default PostsReducer;