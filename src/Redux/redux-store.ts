import {combineReducers, createStore} from 'redux';
import profilePageReducer from "./ProfilePageReducer";
import chatListAddMessageReducer from "./DialogsPageReducer";
import friendsPageReducer from "./FriendsPageReducer";
import {authReducer} from "./AuthotisationReducer";

const rootReducer = combineReducers({
    ProfilePage: profilePageReducer,
    DialogsPage: chatListAddMessageReducer,
    FriendsPage: friendsPageReducer,
    Authorization: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);
export default store