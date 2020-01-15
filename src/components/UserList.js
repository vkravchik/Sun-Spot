import React from "react";

const UserList = (props) => {
  const {data, onUserClick} = props;

  return (
    <div>
      User List
      <ul>
        {
          data.map(el => (
            <li key={el.id} onClick={() => onUserClick(el)}>{el.login}</li>
          ))
        }
      </ul>
    </div>
  )
};

export default UserList;
