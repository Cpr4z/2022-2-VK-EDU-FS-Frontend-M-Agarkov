import {langSwitchFunc} from "../langSwitchField/langSwitchField";
import {useState} from "react";
import TranslatePanel from "../translatePanel/translatePanel";

const TRANSLATION_URL = ({ method }) => `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${ method }
&api-version=3.0&profanityAction=NoAction&textType=plain`

const InputArea = ({translateMethod}) => {
    const handleEnterKeyPress = (event) => {
        if (event.key !== 'Enter') return

        const text = event.target.value.trim()
        if (!text) return
        translateMethod({text})
    }
    return <input className="insert-area" placeholder="Insert your text here" onKeyDown={handleEnterKeyPress}/>
}

const ResultArea = ({ translatedText }) => {
    return <span className="result-area">{translatedText}</span>
}

export const WorkField = () => {
    const [translatedText, setTranslatedText] = useState('')

    const translateText = ({text, language}) => {
        text = 'testcase1'
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${text}"}]`
        }
        fetch(TRANSLATION_URL({code: language}), options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err))
    }

    const translate = ({text}) => {
        let translate = localStorage?.getItem(text) ?? translateText({text: text, translateTo: 'ru'})
        setTranslatedText(text)
    }

    return (
        <div className="main-page-field">
            <TranslatePanel/>
            <div className="working-area">
                <InputArea translateMethod={translate}/>
                <ResultArea translatedText={translatedText}/>
            </div>
        </div>
    )
}
export default TranslatePanel;