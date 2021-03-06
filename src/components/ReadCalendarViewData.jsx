import React, { useEffect, useState } from "react";
import axios from "axios";
import CalendarView from "./CalendarView";

function ReadCalendarViewData() {
  const [calList, setCalList] = useState([]);

  useEffect(() => {
    const awaitFunc = async () => {
      await axios
        .get("https://attendancechecknotice.herokuapp.com/calender/read")

        .then((result) => {
          console.log(result);
          const calarr = result.data.data.map((arr) => {
            const calData = {
              id: arr.noticeToken,
              date: arr.date,
              title: arr.name + " : " + arr.state,
            };
            if (arr.state === "결석") {
              calData.color = "#af1a1a";
            } else if (arr.state === "조퇴") {
              calData.color = "#d68010";
            } else {
              calData.color = "#005fb8";
            }
            return calData;
          });
          setCalList(calarr);
        });
    };

    awaitFunc();
  }, []);
  return <div>{calList.length !== 0 && <CalendarView mycal={calList} />}</div>;
}

export default ReadCalendarViewData;
