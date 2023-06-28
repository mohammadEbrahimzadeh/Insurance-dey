import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ItemNews from "./components/ItemNews";
export default function TabNews() {
  const [key, setKey] = useState("home");
  const detaNews = [
    {
      lastNews: [
        {
          id: 1,
          title: "حضور مدیرعامل بیمه دی در اولین کنفرانس ملی بازاریابی بیمه ",
          srcImg: "/images/news/ImageHandler.jpg",
          date: "چهارشنبه, 20 اردیبهشت,1402",
          link: "#",
        },
        {
          id: 2,
          title:
            "بیمه دی، گواهینامه‌ی ملی رعایت حقوق مصرف‌کنندگان را دریافت کرد",

          srcImg: "/images/news/ImageHandler (1).jpg",
          date: "ﺳﻪشنبه, 19 اردیبهشت,1402",
          link: "#",
        },
        {
          id: 3,
          title: "ضیافت افطار اصحاب رسانه، به میزبانی بیمه دی",
          srcImg: "/images/news/ImageHandler (2).jpg",
          date: "چهارشنبه, 30 فروردین,1402",
          link: "#",
        },
        {
          id: 4,
          title: "مدیر حوزه مدیریت شرکت بیمه دی منصوب شد",
          srcImg: "/images/news/ImageHandler (3).jpg",
          date: "چهارشنبه, 30 فروردین,1402",
          link: "#",
        },
        {
          id: 5,
          title:
            "بیمه دی، میزبان اولین نشست مدیران روابط عمومی صنعت بیمه در سال 1402",
          srcImg: "/images/news/ImageHandler (4).jpg",
          date: "چهارشنبه, 30 فروردین,1402",
          link: "#",
        },
        {
          id: 6,
          title:
            "بیمه دی، کلیه خسارت درمانی جامعه‌ی معزز ایثارگری را پرداخت کرد",
          srcImg: "/images/news/ImageHandler (5).jpg",
          date: "جمعه, 18 فروردین,1402",
          link: "#",
        },
      ],
      Economy: [
        {
          id: 1,
          title:
            "وزیر اقتصاد با اشاره به عزم جدی دولت در حذف ارز ترجیحی: اجازه بازگشت انحصارگران به چرخه تأمین كالای اساسی مردم را نمی دهیم",
          srcImg: "/images/news/ImageHandler (6).jpg",
          date: "دوشنبه ، 30 خرداد ، 1401 ",
          link: "#",
        },
        {
          id: 2,
          title:
            "وزیر اقتصاد خبر داد: مخالفت دولت سیزدهم با واگذاری شركت های دولتی در قالب رد دیون",
          srcImg: "/images/news/ImageHandler.png",
          date: "یکشنبه ، 29 خرداد ، 1401",
          link: "#",
        },
        {
          id: 3,
          title:
            "در نشست وزیر اقتصاد با اساتید دانشگاه علم و صنعت ایران مطرح شد؛ پیشنهاد ایجاد پارك فناوری های ایران و چین و انستیتو اقتصاد هوشمند",
          srcImg: "/images/news/ImageHandler (7).jpg",
          date: "یکشنبه ، 29 خرداد ، 1401",
          link: "#",
        },
        {
          id: 4,
          title:
            "تأکید وزیر اقتصاددر جلسه شورای برنامه ریزی و توسعه استان اردبیل: ضرورت حركت از اقتصاد نفتی به سمت منابع درآمدی ملی و منطقه‌ای / اقتصاد نفتی جای خود را به اقتصاد منطقه ای می دهد",
          srcImg: "/images/news/ImageHandler (8).jpg",
          date: "جمعه ، 20 خرداد ، 1401",
          link: "#",
        },
        {
          id: 5,
          title:
            "وزير اقتصاد در نشست شوراي گفت‌و‌ گوي دولت و بخش خصوصي استان اردبيل؛ ممنوعیت در صادرات ایجاد نمی‌كنیم",
          srcImg: "/images/news/ImageHandler (9).jpg",
          date: "جمعه ، 20 خرداد ، 1401 ",
          link: "#",
        },
        {
          id: 6,
          title:
            "سخنرانی وزیر اقتصاد در اجلاسی سالانه بانک توسعه اسلامی در مصر «تعامل با كشورهای اسلامی» و «مقاوم سازی اقتصاد» اولویت های مهم ایران / ۲ پیشنهاد خاندوزی به بانك توسعه اسلامی",
          srcImg: "/images/news/ImageHandler (10).jpg",
          date: "شنبه، 14 خرداد ، 1401",
          link: "#",
        },
      ],
    },
  ];
  return (
    <div className="TabNews col-12 mt-3">
      <Tabs
        defaultActiveKey="lastNews"
        dir="rtl"
        id="justify-tab-example col-12 "
        onSelect={(k) => setKey(k)}
        className="mb-3 "
      >
        <Tab eventKey="lastNews" title="اخرین اخبار شرکت">
          <div className="d-flex align-items-start justify-content-evenly gap- flex-wrap p-3">
            {detaNews.reverse()[0].lastNews.map((item, index) => {
              return <ItemNews key={index} dataItem={item} />;
            })}
          </div>
        </Tab>

        <Tab eventKey="Economy" title="اقتصادی و دارایی">
          <div className="d-flex align-items-start justify-content-evenly flex-wrap gap-1 p-3">
            {detaNews.reverse()[0].Economy.map((item, index) => {
              return <ItemNews key={index} dataItem={item} />;
            })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
