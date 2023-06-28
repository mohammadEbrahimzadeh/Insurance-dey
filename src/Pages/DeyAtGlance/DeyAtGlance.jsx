import React from "react";
import { BsCircle } from "react-icons/bs";
import { ImWoman, ImMan } from "react-icons/im";
import { GrDiamond } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { MdVisibility, MdOutlineMiscellaneousServices } from "react-icons/md";
import Table from "react-bootstrap/Table";

export default function DeyAtGlance() {
  return (
    <div className="deyAtGlance col-12 p-3">
      <div
        className="col-12 d-flex align-items-center justify-content-evenly"
        style={{ height: "15rem" }}
      >
        <img
          className="col-12 col-sm-9 col-md-6 h-100 "
          style={{ objectFit: "fill" }}
          src="/images/glance/header.png"
          alt=""
        />
      </div>
      <div className="col-12 d-flex justify-content-end align-items-center mt-4 text-end">
        <p className="fs-4 fw-bolder m-0 p-0">
          بیمه دی در یک نگاه
          <span className="ps-3">
            <BsCircle className="fs-3 text-danger  pb-1" />
          </span>
        </p>
      </div>
      <div className="col-12">
        <p className="fs-6 m-0 p-0 text-end">
          شرکت بیمه دی با بیش از 18 سال سابقه فعالیت در صنعت بیمه کشور از طریق
          جذب نیروهای متخصص و اتخاذ راهبردی مدرن و برنامه ریزی دقیق در حال ارائه
          خدمات بیمه ای متنوع به اقشار مختلف جامعه بوده و در همین راستا در حال
          حاضر با 5.950 میلیارد ریال سرمایه ثبت شده و همچنین تولید حق بیمه
          سالیانه بیش از 40.000 میلیارد و برخورداری از بالاترین سطح توانگری در
          صنعت بیمه (سطح 1 توانگری با نسبت 241) از منظر سهم بازار حائز جایگاه
          چهارم در بین 33 شرکت فعال در این صنعت می باشد.
          <br />
          <br />
          در حال حاضر بیش از دو میلیون بیمه شده در سراسر کشور که قریب به 30 در
          صد بازار بیمه درمان تکمیلی را شامل می شوند، خدمات بیمه ای خود را از
          شرکت بیمه دی دریافت نموده و به همین منظور ، این شرکت زیر ساخت فناوری
          مناسبی را از طریق همکاری گسترده با مراکز طرف قرار داد (بیش از 7.000
          مرکز ) به گونه ای فراهم نموده است که بیمه شدگان بدون نیاز به معرفی
          نامه کتبی ، خدمات درمانی خود را به صورت آنلاین از این مراکز دریافت می
          دارند. <br />
          <br />
          همچنین ، در سال 1398 به انتخاب سازمان مدیریت صنعتی، شرکت بیمه دی به
          عنوان رتبه نخست در گروه موسسات بیمه ای و رتبه سی و هفتم در بین صد شرکت
          برتر ایرانی برگزیده گردید و از منظر دو شاخص فروش و بهره وری کلیه عوامل
          در بین تمام شرکت های ایرانی در سال‌های 1398 و 1399 در جایگاه اول قرار
          گرفت.
        </p>
      </div>
      <div className="col-12  d-flex justify-content-evenly align-items-center mt-3 ">
        <img
          src="/public/images/glance/01---Site.jpg"
          alt=""
          className="col-10 col-sm-6"
        />
      </div>
      <div className="col-12 d-flex justify-content-evenly align-items-start mt-4 flex-wrap gap-3">
        <div className="col-12 col-sm-3 ">
          <div className="d-flex border-bottom border-info align-items-center justify-content-between">
            <div className="fs-1 pb-3  text-center">
              <GrDiamond />
            </div>{" "}
            <div>
              <p className="fs-2 fw-bolder m-0 p-0">ارزش‌ ها</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-end flex-column mt-3 flex-wrap gap-2 text-end">
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                456745e745
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                شفافیت
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                دلبستگی سازمانی
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                مسئولیت‌پذیری و پاسخگویی
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 ">
          <div className="d-flex border-bottom border-info align-items-center justify-content-between">
            <div className="fs-1 pb-3  text-center">
              <MdVisibility />
            </div>{" "}
            <div>
              <p className="fs-2 fw-bolder m-0 p-0">چشم انداز</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-end flex-column mt-3 flex-wrap text-end">
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                ارزش آفرینی پایدار
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                تجربه خوشایند مشتریان و شبکه فروش
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 ">
          <div className="d-flex border-bottom border-info align-items-center justify-content-between">
            <div className="fs-1 pb-3  text-center">
              <MdOutlineMiscellaneousServices />
            </div>{" "}
            <div>
              <p className="fs-2 fw-bolder m-0 p-0">ماموریت</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-end flex-column mt-3 flex-wrap text-end">
            <div className="col-12  d-flex justify-content-end align-items-center text-end ">
              <p className="d-flex align-content-center justify-content-end fs-6 m-0 p-0 ">
                ایجاد اطمینان و آرامش خاطر جامعه با ارائه خدمات بیمه‌ای
                نواندیشانه
              </p>{" "}
              <span className="text-danger fs-6 ps-2  ">
                <GoDotFill />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-end align-items-center mt-4 text-end">
        <p className="fs-4 fw-bolder m-0 p-0">
          اطلاعات سازمانی
          <span className="ps-3">
            <BsCircle className="fs-3 text-danger  pb-1" />
          </span>
        </p>
      </div>
      <div className="col-12">
        <p className="fs-6 m-0 p-0 text-end">
          شرکت بیمه دی (سهامی عام ) در سال 1383 با اخذ مجوز رسمی از بیمه مرکزی
          ایران و شورای عالی بیمه ، با شماره ثبت 241511 در اداره ثبت شرکت های
          تهران به منظور ارایه خدمات بیمه ای در رشته های مختلف به ثبت رسید. این
          شرکت با بهرمندی از کارشناسان متخصص و متبحر صنعت بیمه و همچنین گسترش
          شبکه فروش خود در تمامی نقاط کشور با سر لوحه قراردادن شعار تعهد، تخصص و
          نوآوری به طور مستمر سعی مطلوب به بیمه گذاران خود را نموده است.
        </p>
      </div>
      <div className="col-12 studentsItem d-flex justify-content-evenly align-items-center gap-sm-5 flex-column-reverse flex-sm-row mt-3 flex-wrap gap-0 p-3 text-white ">
        <div className="col-12 col-sm-3 d-flex align-items-center justify-content-start gap-2 pb-3 ps-5 ">
          <div className=" d-flex flex-column align-items-center justify-content-evenly ms-5">
            <div
              style={{ fontSize: "4rem" }}
              className="text-center 
            "
            >
              <ImWoman />
            </div>
            <div
              dir="rtl"
              className="fs-6  text-center
            "
            >
              254 نفر
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-evenly">
            <div
              style={{ fontSize: "4rem" }}
              className="text-center 
            "
            >
              <ImMan />
            </div>
            <div
              dir="rtl"
              className="fs-6  text-center
            "
            >
              329 نفر{" "}
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 ps-sm-5 text-wrap d-flex flex-column align-items-center justify-content-evenly pt-3">
          <p className="fs-5 fw-bolder text-center">با افتخار</p>
          <p className="fs-5 fw-bolder text-center">
            با 583 نیروی متخصص در خدمت شما هستیم
          </p>
        </div>
      </div>
      <div className="col-12 mt-3">
        {" "}
        <Table responsive bordered>
          <tbody className="bg-info text-center">
            <tr>
              <td className="text-nowrap p-3">زیر دیپلم</td>
              <td className="text-nowrap p-3">دیپلم</td>
              <td className="text-nowrap p-3">فوق دیپلم </td>
              <td className="text-nowrap p-3">لیسانس</td>
              <td className="text-nowrap p-3">فوق لیسانس </td>
              <td className="text-nowrap p-3"> دکترا </td>
              <td className="text-nowrap p-3"> مدرک تحصیلی </td>
            </tr>
            <tr>
              <td>2</td>
              <td>34</td>
              <td>17</td>
              <td>275</td>
              <td>232</td>
              <td>3 </td>
              <td>پرسنل</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-12 d-flex justify-content-end align-items-center mt-4 text-end">
        <p className="fs-4 fw-bolder m-0 p-0">
          ترکیب سهامداران
          <span className="ps-3">
            <BsCircle className="fs-3 text-danger  pb-1" />
          </span>
        </p>
      </div>
      <div className="col-12  d-flex justify-content-evenly align-items-center my-3 ">
        <img
          src="/public/images/glance/02---Site.jpg"
          alt=""
          className="col-10 col-sm-6"
        />
      </div>
    </div>
  );
}
