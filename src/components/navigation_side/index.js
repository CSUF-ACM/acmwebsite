import React from 'react';

export default ({name}) => {
    return <div id='offcanvas-navbar' uk-offcanvas="mode: reveal; flip: true;">
        <div className='uk-offcanvas-bar'>
            <ul className="uk-nav uk-nav-default">
                <li className={name === "about" ? "uk-active" : ""}><a href='/about'>About Us</a></li>
                <li className={name === "events" ? "uk-active" : ""}><a href='/events'>Events Calendar</a></li>
                <li className={name === "subscribe" ? "uk-active" : ""}><a href='/subscribe'>Mailing List</a></li>
                <li className={name === "board" ? "uk-active" : ""}><a href='/board'>Board Members</a></li>
                <li className={name === "contact" ? "uk-active" : ""}><a href='/contact'>Contact Us</a></li>
            </ul>
        </div>
    </div>
}