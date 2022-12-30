import './langSwitch.css'
import React from 'react'

export const LangSwitch = ({ value, language }) => {
    return <option className="language-option" value={ value }>{ language }</option>
}