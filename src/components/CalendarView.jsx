import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";
import { CalendarModal } from "./CalendarModal";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./calendarstyle.css";
import "./main.css";

class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calArr: ["ASd"],
    };
  }
  state = {
    count: 0,
    modalIsOpen: false,
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
            events={this.props.mycal}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              right: "prev,today,next",
              left: "",
              center: "title",
            }}
            dateClick={function (info) {
              console.log(info.view);
            }}
            editable={true}
            droppable={true}
            eventDrop={function (info) {
              const myid = info.event.id;
              const udate = info.event.startStr;
              console.log(udate);
              let datas = {
                token: myid,
                date: udate,
              };
              axios
                .post(
                  "https://attendancechecknotice.herokuapp.com/calender/update",
                  datas
                )
                .then((res) => {
                  console.log(res);
                  console.log(udate);
                });
            }}
            dayMaxEvents={3}
            eventClick={async function (info) {
              const myid = info.event.id;
            }}
          />
        </div>

        <CalendarModal />
      </div>
    );
  }
}
CalendarView.defaultProps = {
  mycal: [],
};
export default CalendarView;
