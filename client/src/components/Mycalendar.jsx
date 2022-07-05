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
      calArr: [{ date: this.props.mycal }],
    };
  }
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
  };
  componentDidMount(props) {}

  // componentDidMount(props) {
  //   // axios
  //   //   .get("https://attendancechecknotice.herokuapp.com/calender/read")
  //   //   .then((result) => {
  //   //     const resList = result.data.data.map((arr) => {
  //   //       return {
  //   //         id: arr.noticeToken,
  //   //         title: arr.name,
  //   //         date: arr.date,
  //   //       };
  //   //     });
  //   //     this.setState((state) => {
  //   //       return { calArr: resList };
  //   //     });
  //   //     console.log(this.state.calArr);
  //   //   });
  // }

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
            events={this.state.calArr}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              right: "",
              left: "prev,today,next",
              center: "title",
            }}
            selectable={true}
          />
        </div>

        <Modal />
      </div>
    );
  }
}
Mycalendar.defaultProps = {
  mycal: [],
};
export default Mycalendar;
