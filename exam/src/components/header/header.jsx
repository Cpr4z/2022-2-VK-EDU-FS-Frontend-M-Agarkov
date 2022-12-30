import React from 'react';
import './header.module.css'
import {Text} from "../Text/text";
const Header = ({content}) => {
    return (
        <header>
            <Text className={'header'} content={content}/>
        </header>
    );
};

export default Header;