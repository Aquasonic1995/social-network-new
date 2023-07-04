import {applyMiddleware, combineReducers, createStore} from 'redux';
import profilePageReducer from "./ProfilePageReducer";
import chatListAddMessageReducer from "./DialogsPageReducer";
import friendsPageReducer, {ActionFriendPageReducerType} from "./FriendsPageReducer";
import {authReducer} from "./AuthotisationReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


const rootReducer = combineReducers({
    ProfilePage: profilePageReducer,
    DialogsPage: chatListAddMessageReducer,
    FriendsPage: friendsPageReducer,
    Authorization: authReducer,
})
let store = createStore(rootReducer, applyMiddleware(thunk));
type AppActionsType = ActionFriendPageReducerType
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>
export type StoreType = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export default store