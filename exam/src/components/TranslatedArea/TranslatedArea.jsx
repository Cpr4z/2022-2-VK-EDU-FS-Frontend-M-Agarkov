import './TranslatedArea.css'
import { useSelector } from 'react-redux'

export const TranslatedArea = () => {
    const text = useSelector(state => state.text)

    return <span className="result-area">{ text }</span>
}