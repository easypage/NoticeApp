import React, { useEffect, useState } from "react";
import axios from "axios";
import Mycalendar from "./components/Mycalendar";

function Users() {
  const [calList, setCalList] = useState([]);

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://attendancechecknotice.herokuapp.com/calender/read"
    //     );
    //     const calarr = response.data.data.map((arr) => {
    //       return {
    //         id: arr.noticeToken,
    //         date: arr.date,
    //         name: arr.name,
    //       };
    //     });
    //     setCalList(calarr);
    //     console.log(calarr);
    //   } catch (e) {}
    // };
    // fetchUsers();
  }, []);

  return (
    <ul>
      <Mycalendar list={calList} />;
    </ul>
  );
}

export default Users;
