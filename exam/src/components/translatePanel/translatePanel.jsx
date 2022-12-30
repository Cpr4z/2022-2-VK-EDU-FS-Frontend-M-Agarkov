import React from 'react';
import cl from './translatePanel.module.css';
import {TranslateButton} from "../TranslateButton/translateButton";

const TranslatePanel = () => {
    return (
        <div className={cl.mainPage}>
            <TranslateButton/>
        </div>
    );
};

export default TranslatePanel;