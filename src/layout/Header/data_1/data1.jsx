import React from "react";
import { Data_block } from "../header-data";
import { HeaderData2 } from "./data2";

export const HeaderData1 = () => {
  return (
    <>
      <div className="AppleDoc">
        {Data_block.map((V) => (
          <HeaderData2 key={V.id} img={V.img} text={V.text} />
        ))}
      </div>
    </>
  );
};
