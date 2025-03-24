// Posts actions
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    payload: posts
});
  
export const addPosts = (posts) => ({
    type: 'ADD_POSTS',
    payload: posts
});
  
export const addNewPost = (post) => ({
    type: 'ADD_NEW_POST',
    payload: post
});
  
export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading
});
  
export const setPage = (page) => ({
    type: 'SET_PAGE',
    payload: page
});
  
export const setHasMore = (hasMore) => ({
    type: 'SET_HAS_MORE',
    payload: hasMore
});

export const resetPosts = () => ({
    type: 'RESET_POSTS'
});

// User actions
export const setUserList = (userList) => ({
    type: 'SET_USER_LIST',
    payload: userList
});

export const toggleUserList = () => ({
    type: 'TOGGLE_USER_LIST'
});

export const setSelectedUserId = (userId) => ({
    type: 'SET_SELECTED_USER_ID',
    payload: userId
});

// Search actions
export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});

export const setDebouncedSearchQuery = (query) => ({
    type: 'SET_DEBOUNCED_SEARCH_QUERY',
    payload: query
});

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    payload: date
});

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    payload: date
});