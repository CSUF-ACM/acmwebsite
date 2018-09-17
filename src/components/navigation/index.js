import React from 'react';
import * as Scroll from "react-scroll";
import Link from "react-router-dom/es/Link";
import ACM_LOGO from '../../media/acm-desktopcta.png';
import ACM_HOVER_LOGO from'../../media/acm-desktopctahover.png';


export default ({name}) => {
    return <nav className="uk-navbar-container uk-navbar-primary" uk-navbar=""
                uk-sticky="show-on-up: true; animation: uk-animation-slide-top; top:0">
        <div className='uk-navbar-left'>
            <div className="uk-inline-clip uk-margin-left uk-transition-toggle" tabIndex="">
                <img alt="home link logo" height={50} src={ACM_LOGO} width={50} />
                <Link to='/' onClick={Scroll.animateScroll.scrollToTop()}>
                    <img alt="hover home link logo" height={50} src={ACM_HOVER_LOGO} width={50} className="uk-position-cover uk-transition-fade"/>
                </Link>
            </div>
        </div>
        <div className='uk-navbar-right'>
            <ul className="uk-navbar-nav uk-visible@s">
                <li className={name === "about" ? "uk-active" : ""}><Link to="/about" className="uk-button uk-button-text" onClick={Scroll.animateScroll.scrollToTop()}>About Us</Link></li>
                <li className={name === "board" ? "uk-active" : ""}><Link to="/board" className="uk-button uk-button-text" onClick={Scroll.animateScroll.scrollToTop()}>The Board</Link></li>
                <li className={name === "events" ? "uk-active" : ""}><a href="/events" className="uk-button uk-button-text">Events</a>
                    <div className='uk-navbar-dropdown'>
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className={name === "events" ? "uk-active" : ""}><a href="/events">Schedule</a></li>
                            <li className={name === "seminars" ? "uk-active" : ""}><Link to="/seminars" onClick={Scroll.animateScroll.scrollToTop()}>Seminars</Link></li>
                        </ul>
                    </div>
                </li>
                <li className={name === "contact" ? "uk-active" : ""}><Link to="/contact" className="uk-button uk-button-text">Contact Us</Link></li>
                <li className={name === "subscribe" ? "uk-active" : ""}><Link to="/subscribe" className="uk-button uk-button-text" onClick={Scroll.animateScroll.scrollToTop()}>Get Involved</Link></li>
            </ul>
            <div className="uk-navbar-right uk-hidden@s"><a className='uk-navbar-toggle' uk-navbar-toggle-icon=""
                                                            uk-toggle="target: #offcanvas-navbar" dangerouslySetInnerHTML={{__html: ""}}/></div>
        </div>
    </nav>
};