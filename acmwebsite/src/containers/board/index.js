import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import AdvisorList from "../../components/advisor_cards";
import CardList from "../../components/student_cards";
import BoardImage from '../../media/20170825_171844.jpg';
import Fall2017List from './Fall2017List';
import Spring2018List from './Spring2018List';
import AdvisorsList from "./AdvisorsList";

const Board = () => {
    return <div>
        <NavigationSide name={'board'}/>
        <Header image={BoardImage} heading={'The Board'} subtext={'Meet the members in charge.'} imagePosition={'top'}/>
        <Navigation name={'board'}/>
        <div className="uk-section uk-section-default" role='main'>
            <h1 className="uk-heading-line uk-heading-primary uk-text-center"><span>Board</span></h1>
            <ul className="uk-flex-center uk-flex uk-subnav uk-subnav-pill"
                uk-switcher="animation: uk-animation-scale-up; swiping:true;">
                {/* Add the button to see more board members here! */}
                <li><a href='#spring2018-members'>Spring 2018</a></li>
                <li><a href='#fall2017-members'>Fall 2017</a></li>
            </ul>
            <ul className="uk-margin-small-right uk-margin-small-left uk-switcher">
                {/* Add new board members here follow the same format! */}
                <li id='spring2018-members'><CardList members={Spring2018List}/></li>
                <li id='fall2017-members'><CardList members={Fall2017List}/></li>
            </ul>
        </div>
        <div className="uk-section uk-section-default">
            <h1 className="uk-heading-line uk-heading-primary uk-text-center"><span>Advisors</span></h1>
            <AdvisorList advisors={AdvisorsList}/>
        </div>
        <Footer/>
    </div>
};

export default Board;