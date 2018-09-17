import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import '../../style.css';
import HeaderImage from '../../media/blank.jpg';
import Link from "react-router-dom/es/Link";

const About = () => {
    return <div>
        <NavigationSide name={'about'}/>
        <Header image={HeaderImage} heading={'About Us'} subtext={'What we\'re about.'} imagePosition={'top'}/>
        <Navigation name={'about'}/>
        <div className="uk-section uk-section-default" role='main'>
            <div className='uk-container'>
                <h3>Our History</h3>
                <p>
                    ACM (founded 1947) is an international scientific and educational organization dedicated to advancing the art, science, engineering, and application of information technology, serving both professional and public interests by fostering the open
                    interchange of information and by promoting the highest professional and ethical standards. The Student Chapter of ACM at CSUF provides a continuing forum for the exchange of ideas and announcements for all the students on campus that share
                    an interest in the diversified aspects of computing.
                </p>
                <h3>What about us?</h3>
                <p>
                    We love to offer both leadership and skill building projects. If you are interested in a board position please <Link to='/contact' className='uk-link-muted'>contact us</Link>. As for skills, if you are interested in starting a workshop or learning a particular
                    skill please <Link to='/contact' className='uk-link-muted'>contact us</Link>!
                </p>
                <h3>What we Offer</h3>
                <p>
                    The Student Chapter of ACM at CSUF is an open organization to any student with interest in computers and/or computing. The ACM holds monthly general meetings throughout the semester. These meetings provide an excellent environment for
                    students in which to exchange views, opinions, meet new friends and trade secret techniques. In addition to regular meetings, CSUF's Student Chapter of the ACM hosts selected speaker forums, monthly contests, software and hardware
                    workshops, arranges company tours and plans social activities throughout the semester. It is free for everyone and everyone is welcome, and encouraged to attend the meetings!
                </p>
                <div className="uk-child-width-1-2@s uk-child-width-1-4@m"
                     uk-grid=""
                     uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 500; repeat: true">
                    <div id='projects'>
                        <center>
                            <i className="fa fa-3x fa-files-o" style={{color: '#303030'}}/>
                            <h2>Projects</h2>
                        </center>
                    </div>
                    <div id='workshops'>
                        <center>
                            <i className="fa fa-3x fa-users" style={{color: '#303030'}}/>
                            <h2>Workshops</h2>
                        </center>
                    </div>
                    <div id='icpc'>
                        <center>
                            <i className="fa fa-3x fa-file-code-o" style={{color: '#303030'}}/>
                            <h2>ICPC Practice</h2>
                        </center>
                    </div>
                    <div id='hackathons'>
                        <center><i className="fa fa-3x fa-trophy" style={{color: '#303030'}}/>
                        <h2>Hackathons</h2>
                    </center>
                    </div>
                </div>
                <p><Link to='/contact' className='uk-link-muted'>Contact us</Link> if you have an idea for a project or workshop, so we can start planning right away!</p>
            </div>
        </div>
        <Footer/>
    </div>
};

export default About;