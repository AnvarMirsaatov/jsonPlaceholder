import { Camera, X } from "lucide-react";
import React, { useState } from "react";

const ModalEarnper = ({ setplusTab, setEarnperModal, count, setCount }) => {
  const [lvl1, setlvl1] = useState(2);
  const [lvl1Price, setlvl1Price] = useState(100);
  const [lvl2, setlvl2] = useState(3);
  const [lvl2Price, setlvl2Price] = useState(250);
  const [lvl3, setlvl3] = useState(4);
  const [lvl3Price, setlvl3Price] = useState(500);

  function lvl1PriceFunction() {
    if (count > lvl1Price) {
      setplusTab((e) => e + 2);
      setCount(count - lvl1Price);
      setlvl1Price(Math.ceil(lvl1Price * 1.5));
    } else {
      alert("Hisobingizda mablag' yetarli emas");
    }
  }
  function lvl2PriceFunction() {
    if (count > lvl2Price) {
      setplusTab((e) => e + 3);
      setCount(count - lvl2Price);
      setlvl2Price(Math.ceil(lvl2Price * 1.5));
    } else {
      alert("Hisobingizda mablag' yetarli emas");
    }
  }
  function lvl3PriceFunction() {
    if (count > lvl3Price) {
      setplusTab((e) => e + 4);
      setCount(count - lvl3Price);
      setlvl3Price(Math.ceil(lvl3Price * 1.5));
    } else {
      alert("Hisobingizda mablag' yetarli emas");
    }
  }

  return (
    <div className="min-w-[240px] border-1 border-[#8575756E] shadow-md rounded-[20px] px-[30px] py-[25px] ">
      <div className=" flex justify-end">
        <X onClick={() => setEarnperModal(false)} />
      </div>
      <ul className="flex flex-col mt-[28px] gap-[14px]">
        <li
          onClick={lvl1PriceFunction}
          className="flex justify-between items-center  px-[18px] py-[6px] rounded-[15px] bg-[#32363C] active:bg-[#303743]"
        >
          <span>Lvl 1</span>
          <span className="flex items-center gap-[5px]">
            +{lvl1} <img width={15} src="./public/coin.png" alt="" />
          </span>
          <span className="flex items-center gap-[5px]">
            {" "}
            -{lvl1Price} <img width={15} src="./public/coin.png" alt="" />
          </span>
        </li>
        <li
          onClick={lvl2PriceFunction}
          className="flex justify-between items-center  px-[18px] py-[6px] rounded-[15px] bg-[#32363C] active:bg-[#303743]"
        >
          <span>Lvl 1</span>
          <span className="flex items-center gap-[5px]">
            +{lvl2} <img width={15} src="./public/coin.png" alt="" />
          </span>
          <span className="flex items-center gap-[5px]">
            {" "}
            -{lvl2Price} <img width={15} src="./public/coin.png" alt="" />
          </span>
        </li>
        <li
          onClick={lvl3PriceFunction}
          className="flex justify-between items-center  px-[18px] py-[6px] rounded-[15px] bg-[#32363C] active:bg-[#303743]"
        >
          <span>Lvl 1</span>
          <span className="flex items-center gap-[5px]">
            +{lvl3} <img width={15} src="./public/coin.png" alt="" />
          </span>
          <span className="flex items-center gap-[5px]">
            {" "}
            -{lvl3Price} <img width={15} src="./public/coin.png" alt="" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ModalEarnper;
