// import BigCalendar from 'react-big-calendar';
// import moment from 'moment';
// import React, { Component } from 'react';
// import axios from 'axios';
// import { BrowserRouter, Redirect, Link, Switch, Route } from 'react-router-dom';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Navbar from './Navbar';
// import TokenService from '../services/TokenService';




// // Setup the localizer by providing the moment (or globalize) Object
// // to the correct localizer.
// BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

// export default class Calendar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // id: this.props.users.id,
//       dataLoaded: false,
//       events: []
//     };
//     this.handleSelect = this.handleSelect.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//     this.queryEvents = this.queryEvents.bind(this);
//   }

//   handleSelect(slotInfo) {
//     this.props.selectSlot(slotInfo);
//     this.props.history.push('/addevent');
//   }

//   handleEdit(event) {
//     this.props.selectEvent(event);
//     this.props.history.push('/editevent');
//   }

//   queryEvents() {
//     console.log('in calendar.queryEvents, id is ', this.state.id);
//     this.setState({ dataLoaded: false });
//     axios({
//       url: `/events/${this.state.id}`,
//       method: 'get',
//       headers: {
//         Authorization: `Bearer ${TokenService.read()}`
//       }
//     }).then(response => {
//       this.setState({ events: response.data, dataLoaded: true });
//     });
//   }

//   componentDidMount() {
//     const colorData = 'stars_bg';
//     this.props.changeBackground(colorData);
//     this.queryEvents();
//     console.log('in componentDidMount calendar, colorData is ', colorData);
//   }

//   render() {
//     const events = this.state.events.map(event => {
//       return {
//         id: event.id,
//         title: event.title,
//         start: new Date(event.start),
//         end: new Date(event.end_time)
//       };
//     });
//     const MyCalendar = props => (
//       <React.Fragment>
//       <Navbar />
//       <br />
//       <br />
//         <div>
//         <div>
//         <BigCalendar className='calendar'
//           selectable
//           events={events}
//           defaultView="month"
//           startAccessor='startDate'
//       		endAccessor='endDate'
//           // scrollToTime={new Date(2010, 1, 1, 6)}
//           // defaultDate={new Date(2018, 1, 23)}
//           onSelectEvent={event => {
//             if (window.confirm("Edit event?")) {
//               this.handleEdit(event);
//             } else {
//                console.log('editing denied');
//             }}}
//           onSelectSlot={slotInfo =>
//             this.handleSelect(slotInfo)
//           }
//         />
//         </div>
//         </div>
//       </React.Fragment>
//     );
//     if (this.state.dataLoaded === true) {
//       return <div className="calendar-container">{MyCalendar()}</div>;
//     } else {
//       return <div>LOADING EVENTS...</div>;
//     }
//   }
// }
