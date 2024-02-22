import React from "react";

export const HeaderData2 = (img, text) => {
  return (
    <>
      <div className="img_Apple">
        <img src={img} alt="img" />
        <p>{text}</p>
      </div>
    </>
  );
};
