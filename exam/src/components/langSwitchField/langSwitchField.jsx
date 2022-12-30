import React, {Fragment} from 'react';
import cl from './langSwitchField.module.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LangSwitch} from "../LangSwitch/langSwitch";

const LANG_API = 'https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0'

export const LangSwitchField = () => {
    const dispatch = useDispatch();
    const activeLanguage = useSelector(state => state.language)

    const setLang = (lang) => {
        dispatch({type:'SET_LANG', payload:lang})
    }



    const [Languages, setLanguages] = useState([])

    useEffect(() => {
        const languages = async() => {
            const response = await getLanguages()
            if (response) setLanguages(response)
        }
        languages().then()
    }, [])

    const getLanguages = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground'
            }
        }

        return await fetch(LANG_API, options)
            .then(response => response.json())
            .then(response => Object.entries(response))
            .catch(err => console.error(err))
    }

    if (!Languages?.[0]) return

    const set = []
    Object.entries(Languages[0][1]).forEach(rep => set.push([rep[1].name, rep[0]]))

    const handleChange = (event) => {
        event.preventDefault();
        setLang({language: event.target.value})
    }

    return (
        <label style={ { paddingLeft: '5vh' } }>
            Pick a language
            <select className={cl.languages} name="Language" value={ activeLanguage } onChange={ handleChange }>
                { set.map(([lang, code]) => <Fragment key={ code }>
                    <LangSwitch language={ lang } value={ code }/>
                </Fragment>) }
            </select>
        </label>
    )

};
