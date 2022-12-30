import React from 'react';
import Header from '../../components/header/header'
import {OpenHistoryButton} from "../../components/openHistoryButton/openHistoryButton";
import {TranslateButton} from "../../components/TranslateButton/translateButton";
import {LangSwitchField} from "../../components/langSwitchField/langSwitchField";
import {MainField} from "../../components/MainField/MainField";

const MainPage = () => {
    return (
        <div className={'page-layout'}>
            <Header content={"VK translate"}/>
            <TranslateButton/>
            <LangSwitchField/>
            <MainField/>
            <OpenHistoryButton/>
        </div>
    );
};

export default MainPage;
