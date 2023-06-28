import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
export default function ContactUs() {
  return (
    <div
      className="ContactUs col-12 mb-3
     p-3"
    >
      <div className="col-12">
        <img className="col-12" src="/images/products/heaith.jpg" alt="" />
      </div>
      <div className="col-12 d-flex  align-items-end align-items-sm-start justify-content-evenly flex-column-reverse flex-sm-row mt-3 flex-wrap">
        <div className="leftSide   col-12 mt-sm-0 col-sm-6 pe-sm-3 d-flex flex-column align-items-start mt-3 p-2">
          <div className="col-12 d-flex align-items-end justify-content-start flex-column text-end">
            <div>
              <SlEnvolopeLetter className="fs-1 text-info" />
            </div>
            <div className="border-end border-info me-3 mt-3 border-4 pe-3">
              <div className="col-12">
                <h3 className="fs-3 fw-bolder">ارسال نظر و پیشنهاد</h3>
              </div>
              <div className="col-12 mt-4  ">
                <textarea
                  dir="rtl"
                  className="col-12 rounded-3 w-100 rounded  p-3
                  "
                  cols="100"
                  placeholder="دیدگاه خود را بنویسید"
                  rows="10"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="col-12 mt-3">
                <input
                  style={{ boxShadow: "unset" }}
                  type="text"
                  dir="rtl"
                  className="col-12 border-5  border bg-white p-3 "
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="col-12 mt-3">
                <input
                  style={{ boxShadow: "unset" }}
                  type="text"
                  dir="rtl"
                  className="col-12 border-5  border bg-white p-3 "
                  placeholder="ایمیل (ایمیل شما منتشر نخواهد شد)"
                />
              </div>
              <div className="col-12 mt-3 ">
                <button className="fs-5 bg-info col-12 border-0 p-2 text-center text-white">
                  ارسال فرم
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-sm-6 d-flex align-items-end justify-content-start flex-column p-2 ">
          <div className="col-12 d-flex align-items-end justify-content-start flex-column text-end">
            <div>
              <AiFillPhone className="fs-1 text-info" />
            </div>
            <div className="border-end border-info me-3 mt-3 border-4 pe-3">
              <div className="col-12">
                <h3 className="fs-3 fw-bolder">شماره‌های تماس </h3>
                <p className="fs-4 m-0 mt-4 p-0 ">تلفن : 09146002704</p>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex align-items-end justify-content-start flex-column mt-3 text-end">
            <div>
              <BiMap className="fs-1 text-info" />
            </div>
            <div className="border-end border-info me-3 mt-3 border-4 pe-3">
              <div className="col-12">
                <h3 className="fs-3 fw-bolder">ساختمان مرکزی</h3>
                <p className="fs-4 m-0 mt-4 p-0 ">
                  آدرس : تهران - بلوار میرداماد - بین نفت شمالی و مدرس - پلاک
                  239
                </p>
                <p className="fs-4 m-0 mt-2 p-0 ">
                  ساعات کاری: شنبه تا چهارشنبه از ساعت : 8:00 الی 15:30
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex align-items-end justify-content-start flex-column mt-1 text-end">
            <div>
              <GoDotFill className="fs-1 text-danger" />
            </div>
            <div className="border-end border-info me-3 mt-1 border-4 pe-3">
              <div className="col-12">
                <h3 className="fs-3 fw-bolder">ساختمان جبران</h3>
                <p className="fs-4 m-0 mt-4 p-0 ">
                  آدرس : تهران- خیابان بهشتی- خیابان پاکستان- جنب سفارت
                  افغانستان- پلاک 8
                </p>
                <p className="fs-4 m-0 mt-2 p-0 ">
                  ساعات کاری: شنبه تا چهارشنبه از ساعت 8:00 تا 15:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
