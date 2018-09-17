import React from 'react';
import meetings from '../../lists/meetings'

export default () => {
    return <div className="uk-section uk-section-primary">
        <div className='uk-container'>
            <div className="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="">
                <div>
                    <h3>ACM <span className="fa fa-fw fa-pulse fa-star"/> CSUF</h3>
                    <p>Association of Computing Machinery<br/>California State University, Fullerton</p></div>
                <div>
                    <h3>Find us on Social Media</h3>
                    <p>
                        <a href='https://www.twitter.com/acmcsuf' className="uk-margin-small-right uk-icon-button" aria-label="twitter link" target='_blank' rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: ""}}  title='@acmcsuf' uk-icon="icon: twitter" uk-tooltip="pos: left"/>
                        <a href='https://www.facebook.com/groups/acmcsuf' className="uk-margin-small-right uk-icon-button" aria-label="facebook group link" rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: ""}}  target='_blank' title='/group/acmcsuf' uk-icon="icon: facebook" uk-tooltip="pos: top"/>
                        <a href='https://www.instagram.com/acmcsuf' className="uk-margin-small-right uk-icon-button" aria-label="instagram link" target='_blank' rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: ""}}  title='@acmcsuf' uk-icon="icon: instagram" uk-tooltip="pos: bottom"/>
                        <a href='https://acmcsuf.slack.com' className="uk-margin-small-right uk-icon-button" aria-label="slack link" target='_blank' rel="noopener noreferrer" style={{textDecoration: "none"}} dangerouslySetInnerHTML={{__html: "<i class='fa fa-slack'/>"}}  title='ACM CSUF Slack' uk-tooltip="pos: right"/>
                    </p>
                </div>
                <div>
                    <h3>Meetings</h3>
                    {
                        meetings.map((meeting, i) => {
                            return (
                                <p key={meetings[i].id}>
                                    <span className='meeting-title'>{meetings[i].name}</span>
                                    {(meetings[i].room ? ` @ ${meetings[i].room}` : '')}
                                    <br/>
                                    {(meetings[i].start_date ? `${meetings[i].start_date}` : '')}
                                    <br/>
                                    <span className='uk-margin-small-right' uk-icon={(meetings[i].icon ? meetings[i].icon : '')}/>
                                    {meetings[i].times}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
};