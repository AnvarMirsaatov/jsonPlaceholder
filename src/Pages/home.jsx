import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => console.log(result.length))
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};

export default Home;
