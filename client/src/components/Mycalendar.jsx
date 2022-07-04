import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../css/main.css";
import { Modal } from "./Modal";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

class Mycalendar extends Component {
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

  render() {
    return (
      <div className="mypage-body">
        <div className="calendar-wrapper">
          <FullCalendar
            locale={"ko"}
            buttonText={{
              today: "오늘",
              prev: "이전",
              next: "다음",
            }}
            defaultView="timeGridDay"
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              right: "",
              left: "prev,today,next",
              center: "title",
            }}
            events={[
              { title: "event 1", date: "2022-06-27", id: "asas" },
              { title: "event 2", date: "2022-06-28", id: "asas" },
            ]}
            selectable={true}
            select={function (kk) {
              console.log(kk.startStr);
            }}
          />
        </div>
        <Modal />
      </div>
    );
  }
}

export default Mycalendar;
