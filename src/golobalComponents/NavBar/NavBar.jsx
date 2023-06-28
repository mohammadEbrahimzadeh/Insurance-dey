import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePhone, AiOutlineMenu } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
export default function NavBar() {
  const [showMenu, setshowMenu] = useState({
    isOpen: false,
    class: "",
  });
  const date = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    calendar: "persian",
  };
  const solarDate = date.toLocaleDateString("fa-IR", options);
  const closeMenu = () => {
    const newDataState = {
      isOpen: false,
      class: "closeMenuClass",
    };
    setshowMenu(newDataState);
  };
  return (
    <>
      <div className="NavBar  col-12  d-flex align-items-center justify-content-end  flex-wrap ">
        <div className="topOfNav d-none col-12 d-sm-flex align-items-center justify-content-between p-2">
          <div className="ps-3">
            <p className="fw-bold fs-5 m-0 p-0 text-white">{solarDate} </p>
          </div>
          <div className="fsc-6 d-flex align-items-center justify-content-end col-sm-6 me-sm-5  pe-sm-3 gap-3 text-white">
            <div className="d-flex align-items-center justify-content-center">
              <p className="m-0 p-0 pe-2">به وبسایت بیمه دی خوش آمدید</p>
              <GiEarthAmerica />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p className="m-0 p-0 pe-1">1671</p>
              <span className=" pb-1">
                <AiOutlinePhone></AiOutlinePhone>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 d-none d-sm-flex align-items-center justify-content-end p-3">
          <div className="col-12 me-5 p-2 pe-5 text-end">
            <h3 className="fw-bolder m-0 me-5 p-0">با شما ، برای جبران</h3>
          </div>
        </div>
      </div>
      <div className="col-12  position-sticky sticky-top bg-white py-2 shadow">
        <div className="  d-flex   py-sm-1  align-items-center   justify-content-sm-end justify-content-between  col-12  position-relative ">
          <div
            className={`menu-Mobile ${showMenu.class}  w-100 justify-content-end justify-content-sm-end  align-items-center    p-sm-0  d-flex  gap-sm-0  flex-column-reverse flex-sm-row  flex-wrap gap-1`}
          >
            <div className="col-12 col-sm-3 col-xl-2 text-center">
              <Link
                to={"/ContactUs"}
                className="fsc-6  d-flex align-items-center justify-content-center "
                onClick={closeMenu}
              >
                ارتباط با ما <span className="text-info fs-5 ps-1">•</span>
              </Link>{" "}
            </div>
            <div className="col-12 col-sm-3 col-xl-2 text-center">
              <Link
                onClick={closeMenu}
                to={"/dey-at-glance"}
                className="fsc-6  d-flex align-items-center justify-content-center "
              >
                بیمه دی در یک نگاه<span className="text-info fs-5 ps-1">•</span>
              </Link>{" "}
            </div>
            <div className="col-12 col-sm-3 col-xl-2 text-center">
              <Link
                onClick={closeMenu}
                to={"/Customers"}
                className="fsc-6  d-flex align-items-center justify-content-center "
              >
                مشتریان ما
                <span className="text-info fs-5 ps-1">•</span>
              </Link>{" "}
            </div>
            <div className="col-12 col-sm-3 col-xl-2 text-center">
              <Link
                onClick={closeMenu}
                to="/"
                className="fsc-6 mt-sm-0 d-flex  align-items-center justify-content-center mt-3 "
              >
                صفحه اصلی<span className="text-info fs-5 ps-1">•</span>
              </Link>
            </div>
          </div>
          <div className="d-flex  py-sm-0 px-sm-3 justify-content-between align-items-center col-12 col-sm-3 col-md-2 ">
            <div className=" d-sm-none col-3 d-flex align-items-center justify-content-evenly">
              <div className="  pb-3 pt-0">
                <button
                  onClick={() => {
                    let newDataState;
                    if (showMenu.isOpen) {
                      newDataState = {
                        isOpen: false,
                        class: "closeMenuClass",
                      };
                    } else {
                      newDataState = {
                        isOpen: true,
                        class: "openMenuClass",
                      };
                    }
                    setshowMenu(newDataState);
                  }}
                  className="fs-1 text-info  m-0 border-0  bg-white p-0"
                >
                  <AiOutlineMenu className="m-0 p-0" />
                </button>
              </div>
            </div>
            <div className="col-4 col-sm-12  d-flex align-items-center justify-content-center ">
              <Link
                top={"/home"}
                className="fsc-6 d-flex align-items-center justify-content-evenly col-12 "
              >
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
