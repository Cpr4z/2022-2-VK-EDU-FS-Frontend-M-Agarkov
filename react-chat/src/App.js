import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SidebarPage } from './Pages/SidebarPage'
import { ProfilePage } from './Pages/ProfilePage'
import { ExtraButtons } from "./Pages/ExtraButtons";

import { Layout } from './Pages/Layout'


function App() {

    const [chat, setChat] = useState({});

    function openChat(chat){
        console.log(chat);
        setChat(chat);
    }

    return (
        <>
            <ExtraButtons />
            <Routes>
                <Route path="*" element={<Layout chat={chat}/>}>
                    <Route index element={<SidebarPage openChat={openChat}/>} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </>
    );
}


export default App;
