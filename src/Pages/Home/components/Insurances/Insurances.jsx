import React from "react";
import ItemsInsurances from "./ItemsInsurances";
import { AiFillCar } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { FaBriefcaseMedical, FaAirFreshener } from "react-icons/fa";
import { MdEngineering, MdEmojiTransportation } from "react-icons/md";
import { GiLifeBar } from "react-icons/gi";
export default function Insurances() {
  const ItemsInsurancesData = [
    {
      icon: <AiFillCar />,
      title: "بیمه های خودرو",
      link: "/insurances/car",
    },
    {
      icon: <BsFire />,
      title: "بیمه های آتش سوزی",
      link: "/insurances/fire",
    },
    {
      icon: <FaBriefcaseMedical />,
      title: "بیمه های درمان",
      link: "/insurances/treatment",
    },
    {
      icon: <MdEngineering />,
      title: "بیمه های مهندسی",
      link: "/insurances/Engineering",
    },
    {
      icon: <MdEmojiTransportation />,
      title: "بیمه های حمل و نقل",
      link: "/insurances/Transportation",
    },
    {
      icon: <FaAirFreshener />,
      title: "بیمه های مسئولیت",
      link: "/insurances/Responsibility",
    },
    {
      icon: <GiLifeBar />,
      title: "بیمه های زندگی",
      link: "/insurances/life",
    },
  ];
  return (
    <div
      className="Insurances col-12 border-top border-info mt-1  border-5 d-flex align-items-start flex-row-reverse justify-content-evenly p-3  gap-1 flex-wrap 
    "
    >
      {ItemsInsurancesData.map((item, index) => {
        return <ItemsInsurances key={index} dataItem={item}></ItemsInsurances>;
      })}
    </div>
  );
}
