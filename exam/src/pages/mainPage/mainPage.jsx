import React from 'react';
import Header from '../../components/header/header'
import TranslatePanel from "../../components/translatePanel/translatePanel";

const MainPage = () => {
    return (
        <div className={'mainPage'}>
            <Header/>
            <TranslatePanel/>
        </div>
    );
};

export default MainPage;