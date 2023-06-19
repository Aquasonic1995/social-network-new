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

type PropsType = {
    state: any

}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header/>
                    <div className="wrapper">
                        <Sidebar/>
                        <main className="content">
                            <Routes>
                                <Route path="/profile/*" element={<Profile messageData={props.state.ProfilePage.messages}/>}/>
                                <Route path="/dialogs/*" element={<Dialogs UserDialogsItems={props.state.MessagePage.UserDialogsItems}
                                                                           MessageDialogsItems={props.state.MessagePage.MessageDialogsItems}/>}/>
                                <Route path="/friends" element={<Friends cardFriends={props.state.FriendsPage.cardFriends}/>}/>
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
