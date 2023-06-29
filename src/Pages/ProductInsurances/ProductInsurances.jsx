import React, { useState, useEffect } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { TbAd2, TbReportAnalytics } from "react-icons/tb";
import { useParams, useNavigate } from "react-router-dom";
import dataProducts from "./dataProducts";
export default function ProductInsurances() {
  const { idProductUrl } = useParams();
  const [AllDataThisPage, setAllDataThisPage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let SearchInProduct;
    dataProducts.map((item) => {
      idProductUrl == item.idProduct ? (SearchInProduct = item) : "";
    });
    if (SearchInProduct) {
      setAllDataThisPage(SearchInProduct);
    } else navigate("/");
  }, [idProductUrl]);

  return AllDataThisPage ? (
    <div
      className="ProductInsurances col-12 mb-2 p-3
       "
    >
      <div className="col-12 d-flex align-items-center justify-content-evenly">
        <img
          style={{ height: "20rem", objectFit: "cover" }}
          src={AllDataThisPage.imgSrcHeader}
          alt=""
          className="w-100 "
        />
      </div>
      <div className="col-12">
        <div className="col-12 d-flex align-items-center justify-content-end mt-3 text-end">
          <h3 className="FS-5 fw-bolder">معرفی مجصول</h3>
          <span className="fs-3 text-danger pb-3 ps-3">
            <BsInfoCircle />
          </span>
        </div>
        <div className="col-12 d-flex align-items-start justify-content-end border-end border-info  border-5 mt-3 pe-3 text-end">
          <p className="fs-6 m-0 p-0 ">
            <span className="d-block h4 text-info text-end">
              {AllDataThisPage.sections.Header.TitleAboutProduct.trim()}
            </span>
            {AllDataThisPage.sections.Header.aboutProduct}
          </p>
        </div>
      </div>

      {AllDataThisPage.sections.content.listItemsContent.length >= 1 &&
      AllDataThisPage.sections.content.listItemsContent[0].description ? (
        <div className="col-12">
          <div className="col-12 d-flex align-items-center justify-content-end mt-5 text-end">
            <h3 className="FS-5 fw-bolder pt-3">
              {" "}
              مدارک مورد نیاز اعلام خسارت
            </h3>
            <span className=" fs-3 text-danger ps-3">
              <TbAd2 />
            </span>
          </div>
          <div className="col-12 fs-5 fw-bolder  pe-sm-4 text-danger mt-0 text-end">
            <p className="m-0 p-0 ">
              {AllDataThisPage.sections.content.TitleAboutContent.trim()}
            </p>
          </div>
          <div className="col-12 flex-column-reverse flex-sm-row d-flex align-items-start justify-content-end mt-3 flex-wrap">
            <div className=" col-12 col-sm-9 mt-sm-0 d-flex  align-items-start justify-content-end mt-3 text-end ">
              <ul className="list-unstyled d-flex flex-column align-items-end justify-content-start gap-3 text-end ">
                {AllDataThisPage.sections.content.listItemsContent.map(
                  (item, index) => {
                    return (
                      <li
                        dir="rtl"
                        key={index}
                        className="d-flex align-items-start justify-content-end text-end "
                      >
                        <span className="text-danger fs-6 ps-2  ">
                          <GoDotFill />
                        </span>
                        <p className="d-flex align-content-center justify-content-end m-0 p-0 ">
                          {item.description.trim()}
                        </p>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="col-12 col-sm-3   text-center ">
              <TbReportAnalytics
                className="text-info m-0 p-0"
                style={{ fontSize: "5rem" }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}
