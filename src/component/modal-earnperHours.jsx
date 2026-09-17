import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const ModalEarnperHours = ({ count, setCount, setModalEarnperHours }) => {
  const [first_price, setfirst_price] = useState(
    localStorage.getItem("first_price")
      ? localStorage.getItem("first_price")
      : 10,
  );
  const [first_hours, setfirst_hours] = useState(
    localStorage.getItem("first_hours")
      ? localStorage.getItem("first_hours")
      : 10,
  );

  const [first_lvl, setfirst_lvl] = useState(1);

  //   function first_hours_func() {
  //     if (count > first_price) {
  //       setCount(count - first_price);
  //       setfirst_lvl(first_lvl + 1);
  //       setfirst_price(Math.ceil(first_price * 1.5));
  //       localStorage.setItem("first_price", first_price);
  //       setfirst_hours(Math.ceil(first_hours * 1.1));
  //       localStorage.setItem("first_hours", first_hours);
  //     } else {
  //       alert("hisobingda mablag yetarli emas");
  //     }
  //   }

  function first_hours_func() {
    if (count >= Number(first_price)) {
      const newPrice = Math.ceil(Number(first_price) * 1.5);
      const newHours = Math.ceil(Number(first_hours) * 1.1);

      setCount(count - Number(first_price));

      setfirst_lvl(first_lvl + 1);

      setfirst_price(newPrice);
      localStorage.setItem("first_price", newPrice);

      setfirst_hours(newHours);
      localStorage.setItem("first_hours", newHours);
    } else {
      alert("Hisobingda mablag' yetarli emas");
    }
  }

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + first_hours);
    }, 3600000);
  }, [first_hours, setCount, first_price]);

  return (
    <div
      id="ModalEarnperHours"
      className="w-[396px]  h-[400px] overflow-y-scroll py-[33px] bg-[#2C2F35] border-[1px] rounded-[20px] border-[#8575756E] shadow-2xl shadow-[#00000040] px-[25px]"
    >
      <div className="flex justify-end pb-[33px] px-[33px]">
        <X onClick={() => setModalEarnperHours(false)} />
      </div>{" "}
      <div className="flex flex-col gap-[10px] ">
        <div
          onClick={first_hours_func}
          className="card flex flex-col w-[100%] bg-[#32363C]"
        >
          <div className="flex items-center gap-[21px] border-b-[.5px] border-[#FFFFFF33] w-[100%] p-[13px] ">
            <img width={56} src="./public/pairs.png" alt="" />
            <div>
              <h2 className="text-[9px] ">Тоp 10 cmc pairs</h2>
              <p className="text-[8.2px]">Profit per hour</p>
              <div className="flex gap-[2px] items-center">
                <img width={11} src="./public/coin.png" alt="" />
                <p className="text-[7px]">{first_hours}</p>
                {/* soatiga */}
              </div>
            </div>
          </div>
          <div className="flex items-center px-[32px] py-[14px] gap-[12px]">
            <h2 className="py-[7px] border-r-[.5px]  border-[#FFFFFF33] pr-[12px] text-[9px] text-white">
              lvl{" "}
              <span>
                {first_lvl}
                {/* level */}
              </span>
            </h2>
            <div className="flex items-center">
              <img width={15} src="./public/coin.png" alt="" />
              <p>{first_price}</p>
              {/* narxi */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEarnperHours;
