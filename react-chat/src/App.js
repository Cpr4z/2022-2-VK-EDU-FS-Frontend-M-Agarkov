import { useEffect, useState } from 'react';
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { SidebarPage } from './Pages/SidebarPage'
import { ProfilePage } from './Pages/ProfilePage'
import { NavButtons } from "./Pages/NavButtons";

import ChatPage from "./Pages/ChatPage/ChatPage.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { RequireAuth } from "./Auth/RequireAuth";

import { connect } from "react-redux";
import { setViewAction } from "./actions/viewAction";
import { renderNewMessageAction } from "./actions/messageAction";

import { Centrifuge } from "centrifuge";
const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");
const sub = centrifuge.newSubscription("chat");

function App(props) {
    const user = useSelector((state) => state.activeUserReducer);
    
    function addMessagesToChat(ctx) {
        props.renderNewMessageAction(ctx.data.message);
    }

    useEffect(() => {
        sub.on("publication", addMessagesToChat);
        sub.subscribe();
        centrifuge.connect();
    }, []);

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", setDimension);
        props.setViewAction(screenSize);
        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [screenSize]);

    return (
        <>
            {user.isLoggedIn ? (
                <>
                    <NavButtons />
                    {props.view.isDesktop ? (
                        <Routes>
                            <Route exact path="/" element={<SidebarPage />}>
                                <Route path={`/chat/:id`} element={<ChatPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Route>
                        </Routes>
                    ) : (
                        <Routes>
                            <Route exact path="/" element={<SidebarPage />} />
                            <Route path="/profile" element={<ProfilePage />} />

                            <Route path={`/chat/:id`} element={<ChatPage />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    )}
                </>
            ) : (
                <LoginPage />
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    view: state.viewReduser,
});

export default connect(mapStateToProps, {
    setViewAction,
    renderNewMessageAction,
})(App);
