import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import AdvisorList from "../../components/advisor_cards";
import CardList from "../../components/student_cards";
import BoardImage from '../../media/blank.jpg';
import Fall2018List from '../../lists/Fall2018List';
import Spring2018List from '../../lists/Spring2018List';
import Spring2019List from '../../lists/Spring2019List';
import Fall2019List from '../../lists/Fall2019List';
import Spring2020List from '../../lists/Spring2020List'
import AdvisorsList from "../../lists/AdvisorsList";

const Board = () => {
    return <div>
        <NavigationSide name={'board'}/>
        <Header image={BoardImage} heading={'Board Members'} subtext={'Meet the members in charge.'} imagePosition={'top'}/>
        <Navigation name={'board'}/>
        <div className="uk-section uk-section-default" role='main'>
            <div className="uk-heading-line uk-heading-primary uk-text-center"/>
            <ul className="uk-flex-center uk-flex uk-subnav uk-subnav-pill"
                uk-switcher="animation: uk-animation-scale-up; swiping:true;">
                {/* Add the button to see more board members here! */}
                <li><a href='#spring2020-members'>Spring 2020</a></li>
                <li><a href='#fall2019-members'>Fall 2019</a></li>
                <li><a href='#spring2019-members'>Spring 2019</a></li>
                <li><a href='#fall2018-members'>Fall 2018</a></li>
                <li><a href='#spring2018-members'>Spring 2018</a></li>
                
            </ul>
            <ul className="uk-margin-small-right uk-margin-small-left uk-switcher">
                {/* Add new board members here follow the same format! */}
                <li id='fall2020-members'><CardList members={Spring2020List}/></li>
                <li id='fall2019-members'><CardList members={Fall2019List}/></li>
                <li id='spring2019-members'><CardList members={Spring2019List}/></li>
                <li id='fall2018-members'><CardList members={Fall2018List}/></li>
                <li id='spring2018-members'><CardList members={Spring2018List}/></li>
                
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