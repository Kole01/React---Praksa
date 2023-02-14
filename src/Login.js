
import React, { Component, useRef, useState, useEffect } from 'react';
import Service from './services/services'
import Grid from './grid';
import axios from 'axios';
import { resolvePath } from 'react-router-dom';


function LoginForm() {

  const [userList, setUserList] = useState([])
  const [user, setUser] = useState([{ CustomerFirstName: '', CustomerLastName: '' }]);


  useEffect(() => {
    retrieveUsers();
  }, []);

  const retrieveUsers = () => {
    Service.getAll()
      .then(response => {
        setUserList(response.data);
        <Grid data = {response.data}/>
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };




  return (

      <div>
        <h2>Input Grid</h2>
        <table>
          <thead>
            <tr>
              <th>FistName</th>
              <th>LastName</th>
            </tr>
          </thead>
          <tbody>
            <Grid userList={userList}/>
          </tbody>


        </table>
      </div>
  );
}

export default LoginForm;



