import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import "../css/main.css";
import { Modal } from "./Modal";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import axios from "axios";

class Mycalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calArr: [
        { title: "eve3", date: "2022-06-07" },
        { title: "event 2", date: "2022-06-28" },
      ],
    };
  }
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
  };
  componentDidMount(props) {
    axios
      .get("https://attendancechecknotice.herokuapp.com/calender/read")
      .then((result) => {
        console.log(result);
        const resList = result.data.data.map((arr) => {
          return {
            title: arr.name,
            date: arr.date,
          };
        });

        console.log("calarr호출");
        console.log(this.state.calArr);
        console.log("=====");
        console.log();
      });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // fetchUsers = async () => {
  //   try {

  // const calarr = response.data.data.map((arr) => {
  //   return {
  //     id: arr.noticeToken,
  //     date: arr.date,
  //     name: arr.name,
  //   };
  // });
  //     console.log(calarr);
  //   } catch (e) {}
  // };

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
            events={this.state.calArr}
            selectable={true}
            select={function (kk) {
              console.log();
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
