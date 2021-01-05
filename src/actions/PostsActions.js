import axios from "axios";
import {GET_NEWS, START_FETCHING_HEADLINES, STOP_FETCHING_HEADLINES} from "./types/Types";
import {TOP_HEADLINES_URL} from "../apis/PostsUrl";


export const getTopHeadlines =()=>{
    return async dispatch=>{
        dispatch({
            type: START_FETCHING_HEADLINES,
            payload: true
        });

        try {
            const response= await axios.get(`${TOP_HEADLINES_URL}`);
            console.log(response);
            if (response.data.status === 'ok'){
                dispatch({
                    type: GET_NEWS,
                    payload: response.data.articles
                })
            }
        }
        catch (e) {
            dispatch({
                type: STOP_FETCHING_HEADLINES,
                payload: true
            })
        }
    }
};






// import axios from "axios";
// import {GET_NEWS, START_FETCHING_HEADLINES, STOP_FETCHING_HEADLINES} from "./types/Types";
// import {TOP_HEADLINES_URL} from "../apis/PostsUrl";
//
// export const getTopHeadlines=()=>{
//     return async dispatch=>{
//
//     }
// };