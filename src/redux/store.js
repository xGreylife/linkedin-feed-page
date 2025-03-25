import { createStore, combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer';
import userReducer from './reducers/userReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    search: searchReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;