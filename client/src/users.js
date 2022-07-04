import React, { useEffect } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://attendancechecknotice.herokuapp.com/calender/read"
        );
        console.log(response.data.data);
      } catch (e) {}
    };

    fetchUsers();
  }, []);

  return <ul></ul>;
}

export default Users;
