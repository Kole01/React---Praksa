import React from "react";


function Grid(props) {
    const userList = props.userList
    return(userList.map(user =>
        <tr >
          <th>{user.CustomerFirstName}</th>
          <th>{user.CustomerLastName}</th>
        </tr>
      ))
    
}export default Grid