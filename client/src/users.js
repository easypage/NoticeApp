import React, { useEffect, useState } from "react";
import axios from "axios";
import Mycalendar from "./components/Mycalendar";

function Users() {
  const [calList, setCalList] = useState([]);

  useEffect(() => {
    const awaitFunc = async () => {
      await axios
        .get("https://attendancechecknotice.herokuapp.com/calender/read")
        .then((result) => {
          const calarr = result.data.data.map((arr) => {
            return {
              id: arr.noticeToken,
              date: arr.date,
              title: arr.name,
            };
          });
          console.log(calarr);
          setCalList(calarr);
        });
    };

    awaitFunc();
  }, [calList]);
  const arr = [];
  return (
    <div>
      <Mycalendar mycal={calList} />
    </div>
  );
}

export default Users;
