import React from 'react';
import { Link } from 'react-router-dom'
import './openHistoryButton.css'

export const OpenHistoryButton = () => {
    return <Link className="history-button material-icons" to="/history" >history</Link>
};
