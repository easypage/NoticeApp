import React, { useEffect } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/json");
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
