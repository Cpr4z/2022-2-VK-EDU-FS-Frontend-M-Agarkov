import './translateButton.css'
import { Text } from '../Text/text'

export const TranslateButton = () => {
    return (
    <div className="translate-type-button">
      <span className="material-icons">translate</span>
            <Text className="translate-type-text" content="Text"/>
    </div>
    )
}