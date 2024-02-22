import React from "react";
import logo from "../Header/header-img/logo.svg";

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="logo_img">
            <img src={logo} alt="" />
            <p>© 2013-2022</p>
            <p>Продажа iPhone в МСК</p>
            <p className="pFooter">
              Сайт не является публичной оффертой. Вся информация, указанная на
              сайте носит информационный характер.
            </p>
          </div>
          <div className="footer_1">
            <ul className="uk234">
              <li className="li2">Гарантия</li>
              <li className="li2">Политика возврата</li>
              <li className="li2">Кредит</li>
              <li className="li2">Политика возврата</li>
              <li className="li2">Отзывы</li>
              <li className="li2">Контакты</li>
              <li className="li2">Политика конфеденциальности</li>
            </ul>
          </div>
          <div className="footer_1">
            <ul className="uk234">
              <li className="li2">iPhone</li>
              <li className="li2">iPad</li>
              <li className="li2">Macbook и iMac</li>
              <li className="li2">Watch </li>
              <li className="li2">Аксессуары</li>
              <li className="li2">Акции</li>
            </ul>
          </div>
          <div className="Footer_Nt">
            <h1>+998 77 704 86 97</h1>
            <p>Бесплатная консультация С 10:00 до 21:00, без выходных</p>
          </div>
        </div>
      </div>
    </>
  );
};
