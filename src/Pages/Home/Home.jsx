import React from "react";
import Slider from "../../golobalComponents/slider/Slider";
import Insurances from "./components/Insurances/Insurances";
import TabNews from "./components/TabNews/TabNews";
export default function Home() {
  const imagesForSlider = [
    { src: "/images/picOfSliderHome/Banner-Final.jpg" },
    { src: "/images/picOfSliderHome/BD-BIMEOMR-nanner-site.jpg" },
    { src: "/images/picOfSliderHome/BD-Tarhe Moj-Web Banner-02.jpg" },
  ];

  return (
    <div className="Home">
      <Slider images={imagesForSlider} />
      <Insurances />
      <TabNews />
    </div>
  );
}
