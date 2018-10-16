import React from 'react';
import Link from "react-router-dom/es/Link";
import UIkit from 'uikit/dist/js/uikit.min';

export default ({name, clickThis = () => {
    UIkit.offcanvas(document.getElementById('offcanvas-navbar')).hide();
}}) => {

    return <div id='offcanvas-navbar' uk-offcanvas="mode: reveal; flip: true;">
        <div className='uk-offcanvas-bar'>
            <button className="uk-offcanvas-close" type="button" uk-close=""/>
            <ul className="uk-nav uk-nav-default">
                <li className={name === "about" ? "uk-active" : ""}><Link onClick={clickThis} to='/about'>About Us</Link></li>
                <li className={name === "board" ? "uk-active" : ""}><Link onClick={clickThis} to='/board'>The Board</Link></li>
                <li className={name === "events" ? "uk-active uk-parent" : "uk-parent"}><a href='/events'>Events</a>
                        <ul className='uk-nav-sub'>
                            <li className={name === "events" ? "uk-active" : ""}><a href='/events'>Schedule</a></li>
                            <li className={name === "seminars" ? "uk-active" : ""}><Link onClick={clickThis} to='/seminars'>Seminars</Link></li>
                        </ul>
                </li>
                <li className={name === "contact" ? "uk-active" : ""}><Link onClick={clickThis} to='/contact'>Contact Us</Link></li>
                <li className={name === "subscribe" ? "uk-active" : ""}><Link onClick={clickThis} to='/subscribe'>Get Involved</Link></li>
            </ul>
        </div>
    </div>
}