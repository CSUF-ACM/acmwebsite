import React from 'react';

export default ({list_url, hidden_val}) => (
    <div className='col-md-12' id='mc_embed_signup'>
        <form action={`${list_url}`} className='validate' id='mc-embedded-subscribe-form' method='post' name='mc-embedded-subscribe-form' noValidate="" target='_blank'>
            <fieldset className='uk-fieldset'>
                <h1>Join our Mailing List</h1>
            </fieldset>
            <div className='uk-grid-small' id='mc_embed_signup_scroll' uk-grid="">
                <div className='uk-width-1-2@s'><input name='FNAME' className='uk-input' id='mce-FNAME' alt="First Name" label="" placeholder="First Name" title='name' /></div>
                <div className='uk-width-1-2@s'><input name='LNAME' className='uk-input' id='mce-LNAME' alt="Last Name" label="" placeholder="Last Name" title='name' /></div>
                <div className="uk-remove-margin form-group mc-field-group uk-width-1-1"><input name='EMAIL' className='uk-input' id='mce-EMAIL' alt='email' label="" placeholder="Email Address *" title='name' required /></div>
                <div className='clear' id='mce-responses'>
                    <div className='response' id='mce-error-response' style={{display:'none'}}/>
                    <div className='response' id='mce-success-response' style={{display:'none'}}/>
                </div>
                <div className='col-md-12' style={{position:'absolute',left:'-5000px'}} aria-hidden='true'><input name={`${hidden_val}`} tabIndex={-1} /></div>
                <div className="uk-remove-margin uk-text-center uk-width-1-1@s"><input name='subscribe' className="uk-button get uk-button-default" id='mc-embedded-subscribe' type='submit' value='Subscribe' /></div>
            </div>
        </form>
    </div>
)