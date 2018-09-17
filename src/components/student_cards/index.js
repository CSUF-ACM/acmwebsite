import React from 'react';
//NOTE: PLEASE MAKE SURE IMAGES ARE IN img FOLDER!

/**
 * Card Generator
 *
 * @param image
 * @param name
 * @param title
 * @param description
 * @param email
 * @param null github
 * @param null linkedin
 * @param null twitter
 * @param null discord
 *
 */
const Card = ({image, name, title, description, email, github = null, linkedin = null, twitter = null, discord = null}) => {
    return (
        <div>
            <div className="uk-card uk-card-default uk-card-hover uk-animation-toggle">
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid="">
                        <div className="uk-width-auto">
                            <img className="uk-border-circle" alt={name + "'s headshot image"} width="75" height="75" src={image} />
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
                            <p className=" uk-margin-remove-top uk-label">{title}</p>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body uk-card-default uk-height-small">

                    <p>{description}</p>
                </div>
                <div className="uk-card-footer">
                    {/* // eslint-disable-next-line */}
                    <a href={"mailto:" + email} aria-label={name + "'s email link"} className="uk-icon-button  uk-margin-small-right" dangerouslySetInnerHTML={{__html: ""}} uk-icon="icon: mail"/>
                    {/*// eslint-disable-next-line*/}
                    {github ? (<a href={github} target="_blank" rel="noopener noreferrer" aria-label={name + "'s GitHub link"} className="uk-icon-button uk-margin-small-right" dangerouslySetInnerHTML={{__html: ""}} uk-icon="icon: github"/>) : null}
                    {/*// eslint-disable-next-line*/}
                    {linkedin ? (<a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={name + "'s Linkedin link"} className="uk-icon-button uk-margin-small-right" dangerouslySetInnerHTML={{__html: ""}} uk-icon="icon: linkedin"/>) : null}
                    {/*// eslint-disable-next-line*/}
                    {twitter ? (<a href={twitter} target="_blank" rel="noopener noreferrer" aria-label={name + "'s Twitter link"} className="uk-icon-button uk-margin-small-right" dangerouslySetInnerHTML={{__html: ""}} uk-icon="icon: twitter"/>) : null}
                    {/*// eslint-disable-next-line*/}
                    {discord ? (<a href={discord} target="_blank" rel="noopener noreferrer" aria-label={name + "'s Discord link"} className="uk-icon-button uk-margin-small-right"  style={{textDecoration:"none"}} dangerouslySetInnerHTML={{__html: "<i class='fa fa-gamepad'/>"}} />) : null}
                </div>

            </div>
        </div>
    );
};

/**
 * CardList Generator
 *
 * @param members * an array must include [id, image, name, title, description, email]
 *
 */
export default ({members}) => {
    return (
        <div className="uk-child-width-1-4@m uk-child-width-1-2@s uk-grid-small" uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; repeat: true" uk-grid="">
            {
                members.map((user, i) => {
                    return (
                        <Card
                            key={members[i].id}
                            image={members[i].image}
                            name={members[i].name}
                            title={members[i].title}
                            description={members[i].description}
                            email={members[i].email}
                            github={members[i].github}
                            linkedin={members[i].linkedin}
                            twitter={members[i].twitter}
                            discord={members[i].discord}  />
                    );
                })
            }
        </div>
    )
};
