import {combineReducers, createStore} from 'redux';
import profilePageAddPostReducer from "./ProfilePageAddPostReducer";
import chatListAddMessageReducer from "./DialogsPageAddMessageReducer";
import friendsPageReducer from "./FriendsPageReducer";

let reducers = combineReducers({
    ProfilePage: profilePageAddPostReducer,
    DialogsPage: chatListAddMessageReducer,
    FriendsPage: friendsPageReducer,
})
let store = createStore(reducers);
export default store