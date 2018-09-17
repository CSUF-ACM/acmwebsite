import React from 'react'
import '../../style.css';
import './style.css';
import HomeImage from '../../media/homepage.jpg'
import NavigationSide from "../../components/navigation_side";
import Footer from "../../components/footer";
import Link from "react-router-dom/es/Link";
import * as Scroll from "react-scroll/modules/index";
import ACM_LOGO from '../../media/acm-desktopcta.png';
import ACM_HOVER_LOGO from'../../media/acm-desktopctahover.png';

const Home = () => {
    return (
        <div>
            <NavigationSide/>
                <div
                    className="uk-flex uk-background-cover"
                    style={{
                        backgroundImage:`url(${HomeImage})`,
                        height:'calc(100vh)',
                        minHeight:'calc(100vh)'
                    }}
                    alt="ACM Background Picture"
                    title="ACM Background Picture"
                    uk-parallax="bgy: -200"
                >
                <div className="uk-flex uk-position-cover uk-background-primary uk-blend-multiply"/>
                </div>
            <div className="uk-flex uk-position-cover uk-flex-center uk-flex-middle">
                <div className="uk-light uk-child-width-1-1@s uk-grid-collapse uk-text-center" uk-grid="">
                    <div>
                        <h1 className='uk-heading-primary'>Association for Computing Machinery</h1>
                    </div>
                    <div>
                        <p
                            style={{
                                transform:'scale(.5)',
                                opacity:0
                            }}
                            uk-parallax="opacity: 0,1; scale: 0.5,1; viewport: 0.5;"
                        >
                            CSUF ACM. Welcome.
                        </p>
                    </div>
                </div>
            </div>
            <div className='uk-position-top'>
                <div className='uk-light'>
                    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
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
                                <li><Link style={{
                                    position:'relative',
                                    color:'#fff',
                                    height:'70px',
                                    fontSize:'13px'
                                }} to='about' onClick={Scroll.animateScroll.scrollToTop()}>About Us</Link></li>
                                <li><Link style={{
                                    position:'relative',
                                    color:'#fff',
                                    height:'70px',
                                    fontSize:'13px'
                                }} to='board' onClick={Scroll.animateScroll.scrollToTop()}>The Board</Link></li>
                                <li>
                                    <a style={{
                                        position:'relative',
                                        color:'#fff',
                                        height:'70px',
                                        fontSize:'13px'
                                    }} href='events' onClick={Scroll.animateScroll.scrollToTop()} aria-expanded='false'>Events</a>
                                    <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{left:'1462.11px',top:'80px'}}>
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li><a href='events' onClick={Scroll.animateScroll.scrollToTop()}>Schedule</a></li>
                                        <li><Link to='seminars' onClick={Scroll.animateScroll.scrollToTop()}>Seminars</Link></li>
                                    </ul>
                                </div>
                                </li>
                                <li><Link style={{
                                    position:'relative',
                                    color:'#fff',
                                    height:'70px',
                                    fontSize:'13px'
                                }} to='contact'>Contact Us</Link></li>
                                <li><Link style={{
                                    position:'relative',
                                    color:'#fff',
                                    height:'70px',
                                    fontSize:'13px'
                                }} to='subscribe' onClick={Scroll.animateScroll.scrollToTop()}>Get Involved</Link></li>
                            </ul>
                            <div className="uk-navbar-right uk-hidden@s"><a className='uk-navbar-toggle' dangerouslySetInnerHTML={{__html: ""}} uk-navbar-toggle-icon=""
                                                                            uk-toggle="target: #offcanvas-navbar"/></div>
                        </div>
                    </nav>
                </div>
            </div>
            <div
                className="uk-section uk-section-secondary"
                role='main'
            >
                <div className='uk-container'>
                    <h3>Who are we?</h3>
                    <p>A club and community for students with a passion for computer science.</p>
                    <h3>Interested in getting involved?</h3>
                    <p>Click the links above!</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
