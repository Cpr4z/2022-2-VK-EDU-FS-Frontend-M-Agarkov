import React from 'react';
import cl from './translatePanel.module.css';

const TranslatePanel = () => {
    return (
        <div className={cl.mainPage}>
            <form>
                <input type={"text"}/>
            </form>
        </div>
    );
};

export default TranslatePanel;