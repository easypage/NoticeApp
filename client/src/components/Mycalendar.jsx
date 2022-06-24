import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../css/main.css";

class Mycalendar extends Component {
  render() {
    return (
      <div className="mypage-body">
        <div className="body-wraaper">
          <div className="body-info-container">
            <div className="calendar-wrapper">
              <FullCalendar
                defaultView="calendarPlugins"
                plugins={[dayGridPlugin, interactionPlugin]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mycalendar;
