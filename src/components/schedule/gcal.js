import request from 'superagent'

const CALENDAR_ID = 'jo7mgmudv8uibuffbqtdk1isgc@group.calendar.google.com';
const CALENDAR2_ID = 'hs6bk4b2nb2dvshs787timb7fo@group.calendar.google.com';
const API_KEY = 'AIzaSyCwhfMkXl4-iaXUXfP8cBc1LEG3DESnky0';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
let url2 = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR2_ID}/events?key=${API_KEY}`;

export function getEvents (callback) {
    request
        .get(url)
        .end((err, resp) => {
            if (!err) {
                const events = [];
                JSON.parse(resp.text).items.map((event) => {
                    try {
                        events.push({
                            start: event.start.date || event.start.dateTime || '',
                            end: event.end.date || event.end.dateTime || '',
                            title: event.summary,
                        })
                    }
                    catch(e){

                    }
                });
                request
                    .get(url2)
                    .end((err, resp) => {
                        if (!err) {
                            JSON.parse(resp.text).items.map((event) => {
                                try {
                                    events.push({
                                        start: event.start.date || event.start.dateTime || '',
                                        end: event.end.date || event.end.dateTime || '',
                                        title: event.summary,
                                    })
                                }
                                catch(e){

                                }
                            });
                            callback(events)
                        }

                    });

            }
        })
}