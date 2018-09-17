import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import SubscribeImage from '../../media/IMG_3816.jpg';
import MailingList from '../../components/mailingList';

const Subscribe = () => {
    return(
    <div>
        <NavigationSide name={'subscribe'}/>
        <Header image={SubscribeImage} heading={'Subscribe'} subtext={'Join Us. Free Pizza.'} imagePosition={'center'}/>
        <Navigation name={'subscribe'}/>
        <div className="uk-section uk-section-default" role='main'>
            <div className='uk-container'>
                {/* If you want to change the list look for the hidden input value and the form action field */}
                <MailingList
                    list_url={'https://fullerton.us11.list-manage.com/subscribe/post?u=3dbde654283a22318e4cd016d&id=693fc5f30b'}
                    hidden_val={'b_3dbde654283a22318e4cd016d_693fc5f30b'}
                />
            </div>
        </div>
        <Footer/>
    </div>
);
};

export default Subscribe;