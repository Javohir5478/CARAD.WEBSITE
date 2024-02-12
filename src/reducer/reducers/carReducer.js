const initialState = {
    posts :[],
    loading : false,
    activePage: 1,
    search:"",
};

export const carReducer = (state = initialState, {type, payload} ) =>  {
    switch(type) {
        case "get-posts" : 
    return{...state, posts: payload};
    }
    return state;
};