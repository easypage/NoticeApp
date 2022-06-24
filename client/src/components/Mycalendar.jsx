import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "../css/main.css";
class Mycalendar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mypage-body">
        <div className="body-wraaper">
          <div className="body-info-container">
            <div className="calendar-wrapper">
              <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
              />
              <button type="email">하이여</button>
              <button type="email">하이여1</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mycalendar;
