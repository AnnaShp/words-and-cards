import './Header.scss';
import React, { useState } from 'react';
import Desk from '../Desk/Desk';

export default function Header() {

    return (
        <div className='header'>
            <nav className='menu' >
                <ul>
                    <li><a href='#'>Главная страница</a></li>
                    <li><a href='#'>Языки</a></li>
                    <li><a href='#'>Начать</a></li>
                </ul>
            </nav>
        </div >
    );
}
