import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../css/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
class Mycalendar extends Component {
  render() {
    return (
      <div className="mypage-body">
        <div className="calendar-wrapper">
          <FullCalendar
            locale={"ko"}
            buttonText={{
              today: "오늘",
            }}
            defaultView="timeGridDay"
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              right: "",
              left: "prev,today,next",
              center: "title",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Mycalendar;