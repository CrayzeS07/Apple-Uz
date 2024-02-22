import React from "react";
import past from "./header-img/past.png";
import wt from "./header-img/wt.svg";
import telegram from "./header-img/telegram.svg";
import vk from "./header-img/vk.svg";
import logo from "./header-img/logo.svg";
import olov from "./header-img/olov.svg";
import telefon from "./header-img/telefon.svg";
import like from "./header-img/like.svg";
import img1 from "./header-img/img1.svg";
import kz from "./header-img/korzinka.svg";
import i1 from "./header-img/i1.png";
import i2 from "./header-img/i2.png";
import i3 from "./header-img/i3.png";
import i4 from "./header-img/i4.png";
import i5 from "./header-img/i5.png";
import i6 from "./header-img/i6.png";
import img6 from "./header-img/img6.svg";
export const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <div className="header_1 ">
          <div className="header_1_1">
            <h3 className="h3-1 text-black">Ваш город:</h3>
            <h3 className="h3_header">Uzbekistan</h3>
            <img src={past} alt="img" />
          </div>
          <div className="header_1_2">
            <img className="img_app" src={wt} alt="img" />
            <img className="img_app" src={telegram} alt="img" />
            <img className="img_app" src={vk} alt="img" />
          </div>
        </div>
        <div className="header_box">
          <div className="logo_img">
            <img src={logo} alt="img" />
          </div>
          <ul className="ul">
            <li className="li">Весь каталог</li>
            <div className="aksia">
              <img src={olov} alt="img" />
              <li className="li1">Акции</li>
            </div>
            <li className="li">Гарантия</li>
            <li className="li">Политика возврата</li>
            <li className="li">Кредит</li>
            <li className="li">Доставка и оплата</li>
            <li className="li">Отзывы</li>
            <li className="li">Контакты</li>
          </ul>
          <div className="number">
            <img src={telefon} alt="phone" />
            <h3>+998 77 561 96 62</h3>
          </div>
        </div>
        <div className="text22">
          <p>Вам перезвонить?</p>
        </div>
        <div className="hoover_dacument_1">
          <div className="btn_data">
            <button className="btn-tavar">Каталог товаров</button>
          </div>
          <div className="input_search">
            <input
              className="search"
              type="text"
              placeholder="Поиск по каталогу товаров"
            />
          </div>
          <div className="like">
            <img src={like} alt="img" />
            <img src={img1} alt="img" />
          </div>
          <div className="btn2">
            <img src={kz} alt="img" />
            <h3>в корзине</h3>
            <p>1</p>
          </div>
        </div>
        <div className="Apple_Store">
          <div className="block_img1">
            <img src={i1} alt="img" />
            <h3>iPhone</h3>
          </div>
          <div className="block_img1">
            <img src={i2} alt="img" />
            <h3>iPad</h3>
          </div>
          <div className="block_img1">
            <img src={i3} alt="img" />
            <h3>Macbook</h3>
          </div>
          <div className="block_img1">
            <img src={i4} alt="img" />
            <h3>Watch</h3>
          </div>
          <div className="block_img1">
            <img src={i5} alt="img" />
            <h3>Гаджеты</h3>
          </div>
          <div className="block_img1">
            <img src={i6} alt="img" />
            <h3>Аксессуары</h3>
          </div>
          <div className="img_1">
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
