import React, { useState, useEffect } from "react";
import services from "../services/services";
import { Link } from "react-router-dom";


const UserList = () => {
    const [users, setUsers] = useState([]);
    
  useEffect(() => {
    retrieveUsers();
  }, []);


const retrieveUsers = () => {
    services.getAll()
      .then(response => {
        setUsers(response.data);
        
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export default UserList