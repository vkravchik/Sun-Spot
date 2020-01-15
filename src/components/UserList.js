import React from "react";

const UserList = (props) => {
  const {data, onUserClick} = props;

  return (
    <div>
      <h2>
        User List
      </h2>
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
