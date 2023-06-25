import {combineReducers, createStore} from 'redux';
import profilePageAddPostReducer from "./ProfilePageAddPostReducer";
import chatListAddMessageReducer from "./DialogsPageAddMessageReducer";
import friendsPageReducer from "./FriendsPageReducer";

const rootReducer = combineReducers({
    ProfilePage: profilePageAddPostReducer,
    DialogsPage: chatListAddMessageReducer,
    FriendsPage: friendsPageReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);
export default store