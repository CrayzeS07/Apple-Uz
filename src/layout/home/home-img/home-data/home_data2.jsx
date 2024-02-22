import React from "react";

export const PhoneDacument = ({ stars, like, img1, text, Prise, Iphone }) => {
  return (
    <>
      <div className="block_homePhone">
        <div className="phone_NT">
          <img className="stars1" src={stars} alt="star" />
          <img className="like1" src={like} alt="img" />
          <img className="loke2" src={img1} alt="img" />
          <div className="Phone_img_Apple">
            <p className="malumot tect-black">{text}</p>
            <img className="Iphone-img" src={Iphone} alt="phone" />
            <p className="bor">Есть в наличии</p>
            <p className="bor1">Гарантия 1 год</p>
            <p className="prise">{Prise}</p>
            <button className="vlorzina">в корзине</button>
          </div>
        </div>
        
      </div>
    </>
  );
};
