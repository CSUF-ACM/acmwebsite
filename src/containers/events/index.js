import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import EventsImage from '../../media/IMG_0586.JPG';

const Events = () => {
    return <div>
        <NavigationSide name={'events'}/>
        <Header image={EventsImage} heading={'Our Events'} subtext={'Come and Participate.'} imagePosition={'center'}/>
        <Navigation name={'events'}/>
        <div className="uk-section uk-section-default" role='main'>
            <div className='uk-container'>
                <div id='calendar'/>
            </div>
        </div>
        <Footer/>

    </div>
};

export default Events;