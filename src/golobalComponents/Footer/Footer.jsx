import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="Footer ">
      <div className=" mainFooter d-flex align-items-start justify-content-end pt-sm-3 pb-sm-0 col-12   flex-column-reverse flex-md-row flex-wrap text-white">
        <div className="col-12 col-md-8 mt-sm-0 d-flex  align-items-start justify-content-end gap-sm-0 flex-column flex-sm-row mt-3 flex-wrap gap-3 pe-3">
          <div className="col-12 col-md-4 pe-sm-2 mt-md-0 mt-3 text-end">
            <ul className="list-unstyled d-flex justify-content-end align-items-end flex-column gap-3">
              <li>
                <p className="text-danger fs-5 fw-bold  m-0 p-0">
                  راه های ارتباطی
                </p>
              </li>

              <li>
                <Link to={"/ContactUs"} className="text-decoration-none ">
                  <p className=" fs-6 m-0  p-0 ">تماس باما</p>
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-5 pe-sm-2  text-end">
            <ul className="list-unstyled d-flex justify-content-end align-items-end flex-column gap-3">
              <li>
                <p className="text-danger fs-5 fw-bold  m-0 p-0">پیوند ها</p>
              </li>

              <li>
                <Link
                  target={"_blank"}
                  to={"https://www.centinsur.ir/"}
                  className="text-decoration-none "
                >
                  <p className=" fs-6 m-0  p-0 ">بیمه مرکزی جمهوری اسلامی</p>
                </Link>{" "}
              </li>
              <li>
                <Link
                  target={"_blank"}
                  to={
                    "https://www.centinsur.ir/index.aspx?siteid=1&fkeyid=&siteid=1&pageid=275"
                  }
                  className="text-decoration-none "
                >
                  <p className=" fs-6 m-0  p-0 ">
                    آیین‌نامه‌های مصوب بیمه مرکزی
                  </p>
                </Link>{" "}
              </li>
              <li>
                <Link
                  target={"_blank"}
                  to={"http://sbi.ir/"}
                  className="text-decoration-none "
                >
                  <p className=" fs-6 m-0  p-0 ">سندیکای بیمه‌گران ایران</p>
                </Link>{" "}
              </li>
              <li>
                <Link
                  target={"_blank"}
                  to={"http://pii.ir/"}
                  className="text-decoration-none "
                >
                  <p className=" fs-6 m-0  p-0 ">انجمن حرفه‌ای صنعت بیمه</p>
                </Link>{" "}
              </li>
              <li>
                <Link
                  target={"_blank"}
                  to={"http://sanhab.centinsur.ir/"}
                  className="text-decoration-none "
                >
                  <p className=" fs-6 m-0  p-0 ">سامانه سنهاب</p>
                </Link>{" "}
              </li>
              <li>
                <Link
                  target={"_blank"}
                  to={"http://www.irc.ac.ir/"}
                  className="text-decoration-none "
                >
                  <p className=" fs-6 m-0  p-0 ">پژوهشکده بیمه</p>
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3 pe-sm-2  text-end">
            <ul className="list-unstyled d-flex justify-content-end align-items-end flex-column gap-3">
              <li>
                <p className="text-danger fs-5 fw-bold  m-0 p-0">بیمه دی</p>
              </li>
              <li>
                <Link to={"/dey-at-glance"} className="text-decoration-none ">
                  <p className=" fs-6 m-0  p-0 ">بیمه دی در یک نگاه</p>
                </Link>{" "}
              </li>
              <li>
                <Link to={"/Customers"} className="text-decoration-none ">
                  <p className=" fs-6 m-0  p-0 ">مشتریان ما</p>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-4  mt-md-0 mt-3 px-2 ">
          <div>
            <h1 className="fs-4 fw-bold text-center">باشما ، برای جبران</h1>
          </div>
          <div className="mt-3">
            <p className="fs-5  m-0 p-0 text-center">
              ایجاد اطمینان و آرامش خاطر جامعه با راهکارهای نو از راه جبران یا
              کاهش مخاطرات
            </p>
          </div>
          <div className="col-12 d-flex align-items-start justify-content-evenly mt-3 flex-wrap gap-1">
            <img
              className="col-2 px-sm-3 px-md-0"
              src="/images/Footer/1png.png"
              alt=""
            />
            <img
              className="col-2 px-sm-3 px-md-0"
              src="/images/Footer/2.png"
              alt=""
            />
            <img
              className="col-2 px-sm-3 px-md-0"
              src="/images/Footer/3.svg"
              alt=""
            />
            <img
              className="col-2 px-sm-3 px-md-0"
              src="/images/Footer/4.svg"
              alt=""
            />
          </div>
        </div>{" "}
      </div>

      <div className="col-12 m-0 bg-black    p-3">
        <p className=" text-warning fsc-6 m-0  p-0 text-center">
          این سایت توسط زهرا طباخی طراحی شده است
        </p>
      </div>
    </div>
  );
}
