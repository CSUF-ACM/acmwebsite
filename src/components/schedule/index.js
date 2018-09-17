import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount () {
        getEvents((events) => {
            this.setState({events})
        });

    }

    render() {
        return (
            <div id="example-component">
                    <FullCalendar
                        id = "your-custom-ID"
                        header= {{
                            left:"title",
                            center:"agendaDay,agendaWeek,month",
                            right:"prev,next today"
                        }}
                        displayEventTime={!1}
                        // googleCalendarApiKey={"AIzaSyCwhfMkXl4-iaXUXfP8cBc1LEG3DESnky0"}
                        // eventSources={
                        //     [
                        //         {
                        //             googleCalendarId:"jo7mgmudv8uibuffbqtdk1isgc@group.calendar.google.com"
                        //         },
                        //         {
                        //             googleCalendarId:"hs6bk4b2nb2dvshs787timb7fo@group.calendar.google.com",
                        //             className:"nice-event"
                        //         }
                        //     ]
                        // }
                        events={this.state.events}
                        eventClick={
                            function(e){
                                return window.open(e.url,"gcalevent","width=700,height=600"),!1
                            }
                        }
                    />
            </div>
        );
    }
}

export default Schedule;