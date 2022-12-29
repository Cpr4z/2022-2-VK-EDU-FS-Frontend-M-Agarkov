import React from 'react';
import cl from './langSwitchField.module.css'
import {useEffect, useState} from "react";

    const LANG_API = 'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0'

    export const langSwitchFunc = () => {
        const [Languages, setLanguage] = useState([])

        const getLanguages = () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                    'x-rapidapi-ua': 'RapidAPI-Playground'
                }
            }

            fetch(LANG_API, options).then(response => response.json())
                .then(response => setLanguage(response))
                .catch(err => console.log(err.data))
        }

        useEffect(() => {
            getLanguages()
        })

        return <div className={cl.languages}>{Languages}</div>


};
