import React from "react";

export default function ContentItem({ data }) {
  return (
    <div className="ContentItem mt-3  p-3  col-12 d-flex align-items-start justify-content-evenly gap-3 flex-wrap">
      <div
        className={`col-12 d-flex align-items-center justify-content-evenly  gap-1  flex-wrap ${
          data.rightMode
            ? "flex-column-reverse flex-md-row-reverse"
            : "flex-column-reverse flex-md-row"
        }`}
      >
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-evenly  gap-3 flex-wrap">
          {data.imageCard.map((item, index) => {
            return (
              <div
                key={index}
                className="col-6 col-sm-2 col-md-3 col-xl-2   shadow  p-3  d-flex align-items-center justify-content-center"
              >
                <img src={item.src} className="col-6 col-sm-12" alt="" />
              </div>
            );
          })}
        </div>
        <div className="col-12 col-md-6 text-end  ">
          <h4 className="fs-4 fw-bolder">{data.ContentCard.title}</h4>
          <p className="p-0 m-0 fs-5">{data.ContentCard.description}</p>
        </div>
      </div>
    </div>
  );
}
