import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css'


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default MyCalendar