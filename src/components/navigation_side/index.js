import React from 'react';
import Link from "react-router-dom/es/Link";

export default ({name}) => {
    return <div id='offcanvas-navbar' uk-offcanvas="mode: reveal; flip: true;">
        <div className='uk-offcanvas-bar'>
            <ul className="uk-nav uk-nav-default">
                <li className={name === "about" ? "uk-active" : ""}><Link to='/about'>About Us</Link></li>
                <li className={name === "board" ? "uk-active" : ""}><Link to='/board'>The Board</Link></li>
                <li className={name === "events" ? "uk-active uk-parent" : "uk-parent"}><a href='/events'>Events</a>
                        <ul className='uk-nav-sub'>
                            <li className={name === "events" ? "uk-active" : ""}><a href='/events'>Schedule</a></li>
                            <li className={name === "seminars" ? "uk-active" : ""}><Link to='/seminars'>Seminars</Link></li>
                        </ul>
                </li>
                <li className={name === "contact" ? "uk-active" : ""}><Link to='/contact'>Contact Us</Link></li>
                <li className={name === "subscribe" ? "uk-active" : ""}><Link to='/subscribe'>Get Involved</Link></li>
            </ul>
        </div>
    </div>
}