import React from "react";
import { PhoneDacument } from "./home_data2";
import { PhoneData } from "./home_data1";

export const PhoneDacumentN1 = () => {
  return (
    <>
      <div className="xizmat_korsatish">
        {PhoneData.map((B) => (
          <PhoneDacument
            key={B.id}
            stars={B.stars}
            like={B.like}
            img1={B.img1}
            text={B.text}
            Prise={B.Prise}
            Iphone={B.Iphone}
          />
        ))}
      </div>
    </>
  );
};
