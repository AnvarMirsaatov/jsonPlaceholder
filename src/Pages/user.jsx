import React, { useEffect, useState } from "react";
import UserCard from "../component/card";

const User = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setdata(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <main className="flex flex-wrap gap-[30px] justify-between px-[50px]">
        {data?.map((e) => {
          console.log(e);

          return <UserCard data={e} key={e?.id} />;
        })}
      </main>
    </div>
  );
};

export default User;
