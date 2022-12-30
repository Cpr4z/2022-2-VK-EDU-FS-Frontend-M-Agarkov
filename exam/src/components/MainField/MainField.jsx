import './MainField.css'
import {InputArea} from "../inputArea/inputArea";
import {TranslatedArea} from "../TranslatedArea/TranslatedArea";

export const MainField = () => {
    return (
        <div className="main-page-field">
            <div className="working-area">
                <InputArea/>
                <TranslatedArea/>
            </div>
        </div>
    )
}