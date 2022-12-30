import {useDispatch, useSelector} from "react-redux";
import './inputArea.css'

const TRANSLATION_URL = ({ code }) => `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${ code }
&api-version=3.0&profanityAction=NoAction&textType=plain`

export const InputArea = () => {
    const dispatch = useDispatch()
    const language = useSelector(state => state.language)

    const setText = (text) => {
        dispatch({type:'SET_TEXT', payload:text})
    }

    const performTranslate = async ({TEXT, translateTo}) => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${ TEXT }"}]`
        }

        return await fetch(TRANSLATION_URL({code: translateTo}), options)
            .then(response => response.json())
            .catch(err => console.error(err))
    }

    const handleSubmit = async ({Text, Language}) => {
        let translations = []
        let translated = await performTranslate({text: Text, translateTo:Language})
        translated = translated[0].translations[0].Text

        if (localStorage.length) translations = JSON.parse(localStorage.getItem('translations'))
        translations.push([Text, Language, translated])

        localStorage.setItem('translations', JSON.stringify(translations))

        return translated
    }

    const handleEnterKeyPress = async (event) => {
        if (event.key !== 'Enter') return

        const text = event.target.value.trim()
        if (!text) return

        setText({text: await handleSubmit({Text: text, Language:language})})

    }
    return <input className="insert-area" placeholder="Insert your text here" onKeyDown={handleEnterKeyPress}/>
}

