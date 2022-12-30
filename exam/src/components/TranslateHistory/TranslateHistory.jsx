import React, {Fragment, useEffect, useState} from 'react';

const TranslateHistory = () => {
    const [translations, setTranslations] = useState([])

    useEffect(() => {
        setTranslations(JSON.parse(localStorage.getItem('translations')))
    }, [])

    if (!localStorage?.translations) return <h2 style={ { marginLeft: '5vh' } }>You can create a new message</h2>
    return (
        <>
            <div className="history-book">
                { translations.map(translation => <Fragment>{ translation.join(' -> ') }<br/></Fragment>) }
            </div>
        </>
    );
};

export default TranslateHistory;