import React, { useEffect, useState } from "react";
import InsurancesPageDataArray from "./InsurancesPageData";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsCircle } from "react-icons/bs";
export default function InsurancesPage() {
  const { idCategory } = useParams();
  const navigate = useNavigate();
  const [ActiveCategory, setActiveCategory] = useState();
  useEffect(() => {
    let searchCategory;
    InsurancesPageDataArray.map((item) => {
      if (idCategory == item.title) {
        searchCategory = item;
      }
    });
    if (searchCategory) {
      setActiveCategory(searchCategory);
    } else navigate("/");
  }, [idCategory]);

  return ActiveCategory ? (
    <div
      className="InsurancesPage col-12 d-flex align-items-center justify-content-evenly flex-wrap gap-3 p-3
    "
    >
      <div className="col-12 mt-3 text-end pe-sm-5 d-flex align-items-center justify-content-end">
        <h4 className="fs-4 fw-bolder  text-black">
          {ActiveCategory.items[0].titlePage}
        </h4>
        <span className="fw-bolder text-danger fs-3 pb-3 ps-3">
          <BsCircle></BsCircle>
        </span>
      </div>
      {ActiveCategory.items[0].items.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/ProductInsurances/${item.idItem}`}
            className="col-12 cardItem col-sm-5 col-md-3 border border-1 mt-1 shadow  "
          >
            <div>
              <div className="col-12 p-2">
                <img src={item.imgSrc} className="w-100" alt="" />
              </div>
              <div className="col-12  p-3 ">
                <p className="m-0 p-0 fsc-6  fw-bold text-center ">
                  {item.title}
                </p>
              </div>
            </div>{" "}
          </Link>
        );
      })}
    </div>
  ) : (
    ""
  );
}
