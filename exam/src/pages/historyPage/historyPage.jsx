import React, {Fragment} from 'react';
import Header from "../../components/header/header";
import TranslateHistory from "../../components/TranslateHistory/TranslateHistory";

const HistoryPage = () => {
    return (
        <Fragment>
            <Header content={"History"}/>
            <TranslateHistory/>
        </Fragment>
    );
};

export default HistoryPage;