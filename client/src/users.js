import React, { useEffect } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://attendancechecknotice.herokuapp.com"
        );
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUsers();
  }, []);

  return <ul></ul>;
}

export default Users;
