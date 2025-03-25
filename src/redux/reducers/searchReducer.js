const initialState = {
    searchQuery: '',
    startDate: '',
    endDate: '',
    debouncedSearchQuery: ''
};
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'SET_DEBOUNCED_SEARCH_QUERY':
            return {
                ...state,
                debouncedSearchQuery: action.payload
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.payload
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload
            };
        default:
            return state;
    }
};
  
export default searchReducer;