import React from 'react';
import NavigationSide from "../../components/navigation_side";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import ContactForm from "../../components/ContactForm";
import ContactImage from '../../media/IMG_0770.JPG';

const Contact = () => {
    return <div>
        <NavigationSide name={'contact'}/>
        <Header image={ContactImage} heading={'Contact Us'} subtext={'Let\'s keep in touch.'} imagePosition={'center'}/>
        <Navigation name={'contact'}/>
        <div className="uk-section uk-section-default" role='main'>
            <div className='uk-container'>
                <ContactForm/>
            </div>
        </div>
        <Footer/>
    </div>
};

export default Contact;