import React from "react";
import { Link } from "react-router-dom";
export default function ItemsInsurances({ dataItem }) {
  return (
    <div className="ItemInsurance p-3 col-5 col-sm-3 col-md mt-3 shadow bg-light ">
      <Link to={dataItem.link} className="text-decoration-none ">
        <div className="d-flex align-items-center justify-content-evenly fs-1 ItemInsurance-icon">
          <div>{dataItem.icon}</div>
        </div>
        <div>
          <div className="mt-3 d-flex align-items-center justify-content-evenly fsc-6  ItemInsurance-title">
            <p className="p-0 m-0 text-center">{dataItem.title}</p>
          </div>{" "}
        </div>
      </Link>
    </div>
  );
}
