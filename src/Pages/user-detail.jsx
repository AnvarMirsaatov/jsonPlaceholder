import React, { useEffect, useState } from "react";

const UserDetail = () => {
  const [data, setdata] = useState();
  const userId = localStorage.getItem("user-id");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setdata(result))
      .catch((err) => console.log(err));
  }, []);
  console.log(userId, data);

  return <div></div>;
};

export default UserDetail;
