// reducers/userReducer.js
const initialState = {
    userList: [],
    showUserList: false,
    selectedUserId: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_LIST':
        return {
          ...state,
          userList: action.payload
        };
      case 'TOGGLE_USER_LIST':
        return {
          ...state,
          showUserList: !state.showUserList
        };
      case 'SET_SELECTED_USER_ID':
        return {
          ...state,
          selectedUserId: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;