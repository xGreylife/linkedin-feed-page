const initialState = {
    posts: [],
    isLoading: false,
    page: 1,
    hasMore: true
};
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            };
        case 'ADD_POSTS':
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            };
        case 'ADD_NEW_POST':
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            };
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            };
        case 'SET_HAS_MORE':
            return {
                ...state,
                hasMore: action.payload
            };
        case 'RESET_POSTS':
            return {
                ...state,
                posts: [],
                page: 1,
                hasMore: true
            };
        default:
            return state;
    }
};
  
export default postsReducer;