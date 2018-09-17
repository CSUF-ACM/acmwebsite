import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import SeminarCards from "../../components/seminar_cards";
import SeminarsList from "../../lists/SeminarsList";

const Seminars = () => {
    return <div>
        <NavigationSide name={'seminars'}/>
        <Header heading={'Seminars'} subtext={'Come by and learn something new.'}/>
        <Navigation name={'seminars'}/>
        <div className="uk-margin-small-right uk-margin-small-left uk-section uk-section-default" role='main'
             uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
            <h1 className='uk-heading-bullet'>Speaker Series</h1>
            <SeminarCards seminars={SeminarsList}/>
        </div>
        <Footer/>
    </div>
};

export default Seminars;