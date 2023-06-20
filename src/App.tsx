import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import Friends from './components/Friends/Friends';

type messageType = {
    message: string
    countLike: number,
    id: number,
    src: string,
    user_name: string,
}
type MessagesType = {
    messages: Array<messageType>
    updatePostInProfile: string

}
type UserDialogsItemType = {
    src: string
    name: string,
    id: number,
}
type MessageDialogsItemType = {
    src: string
    message: string,
    message_time: string,
    className: string,
    id: number,
}
type PropsDialogsItemsType = {
    MessageDialogsItems: Array<MessageDialogsItemType>
    UserDialogsItems: Array<UserDialogsItemType>
}
type cardFriendType = {
    cardAvatar: string,
    cardBg: string,
    user_name: string,
    id: number,
}
type cardFriendsType = {
    cardFriends: Array<cardFriendType>
}
type statesType = {
    ProfilePage: MessagesType
    MessagePage: PropsDialogsItemsType
    FriendsPage: cardFriendsType
}
type PropsType = {
    getState(): statesType,
    dispatch: Function,
}
type PropsStoreType = {
    store: PropsType
}

function App(props: PropsStoreType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header/>
                    <div className="wrapper">
                        <Sidebar/>
                        <main className="content">
                            <Routes>
                                <Route path="/profile/*"
                                       element={<Profile messageData={props.store.getState().ProfilePage}
                                                         dispatch={props.store.dispatch.bind(props.store)}
                                       />
                                       }/>
                                <Route path="/dialogs/*"
                                       element={<Dialogs
                                           UserDialogsItems={props.store.getState().MessagePage.UserDialogsItems}
                                           dispatch={props.store.dispatch.bind(props.store)}
                                           MessageDialogsItems={props.store.getState().MessagePage.MessageDialogsItems}

                                       />}/>
                                <Route path="/friends"
                                       element={<Friends
                                           cardFriends={props.store.getState().FriendsPage.cardFriends}/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                            </Routes>
                        </main>
                    </div>
                </div>
                <Dropdown/>
            </div>
        </BrowserRouter>
    );
}

export default App;
