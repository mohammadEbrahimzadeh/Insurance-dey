import React from "react";
import ItemsInsurances from "../../Insurances/ItemsInsurances";
import { Link } from "react-router-dom";
export default function ItemNews({ dataItem }) {
  return (
    <div className="ItemNews col-12 col-md-5    border-bottom border-1 pb-3">
      <div className="d-flex justify-content-end align-items-center">
        <div className="pe-2 col-9 d-flex flex-column align-items-center justify-content-evenly">
          <div>
            <Link to={dataItem.link} className="text-decoration-none">
              <p className="m-0 p-0 pe-2 fsc-6 text-end fw-bolder fs-6  text-black">
                {dataItem.title}
              </p>
            </Link>
          </div>
          <div>
            <p className="m-0 mt-3 p-0 text-center text-danger fs-6 fw-bold ">
              {dataItem.date}
            </p>
          </div>
        </div>
        <div className="col-3 d-flex align-items-stretch justify-content-evenly ">
          <Link to={dataItem.link}>
            <img src={dataItem.srcImg} className="h-100  w-100" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
