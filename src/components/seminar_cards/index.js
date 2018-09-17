import React from 'react';

/**
 * Card Generator
 *
 * @param room
 * @param title
 * @param date_time
 * @param presenter
 * @param description
 *
 */
const Seminar = ({room, title = null, date_time, presenter, description = null}) => {
    return (
        <div>
            <div className="uk-card uk-card-default uk-card-body uk-card-hover">
                <p className="uk-card-badge uk-margin-remove-top uk-label">{room}</p>
                <div className="uk-card-body">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{title ? title : 'Seminar Title'}</h3>
                    {presenter}
                    <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">{date_time}</time></p>
                    <p>{description ? description : 'Description'}</p>
                </div>
            </div>
        </div>
    );
};
//NOTE: PLEASE MAKE SURE IMAGES ARE IN img FOLDER!

/**
 * CardList Generator
 *
 * @param members * an array must include [room, title, date_time, presenter, description]
 *
 */
export default ({seminars}) => {
    let count = 0;
    return (
            <div className="uk-child-width-1-1@s uk-margin-large-left uk-margin-large-right uk-text-center" uk-grid="">
                {
                    seminars.map((user, i) => {
                        count += 1;
                        return (
                            <Seminar
                                key={count}
                                room={seminars[i].room}
                                title={seminars[i].title}
                                date_time={seminars[i].date_time}
                                presenter={seminars[i].presenter}
                                description={seminars[i].description}
                            />
                        );
                    })
                }
            </div>
        )
};