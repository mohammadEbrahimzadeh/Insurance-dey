import React from "react";
import ContentItem from "./components/ContentItem";
import DataItems from "./DataItems";
export default function Customers() {
  return (
    <div className="Customers col-12 p-3">
      <div className="col-12">
        <img
          src="/images/Customers/custom1920-500.jpg"
          className="col-12"
          alt=""
        />
      </div>
      {DataItems.map((item, index) => {
        return <ContentItem data={item} key={index} />;
      })}
    </div>
  );
}
