import React from "react";
import phone from "./home-img/phone.png";
import { PhoneDacumentN1 } from "./home-img/home-data/home_data3";
import imgta from "./home-img/home1.svg";
import skidka from "./home-img/skidka.svg";

export const Hoome = () => {
  return (
    <>
      <div className="Home_Nt">
        <div className="container">
          <div className="Home">
            <div className="home_1">
              <img src={phone} alt="phone" />
            </div>
            <div className="home_2">
              <h1>iPh◕ne 14</h1>
              <h3>18 653 056 UZS</h3>
              <button className="btn_phone">подробнее</button>
            </div>
          </div>
        </div>
      </div>
      <div className="kupit">
        <h1 className="text-black">купить iPhone в Узбекистан</h1>
      </div>
      <div className="container">
        <h1 className="NT1">Самое популярное</h1>
      </div>
      <div className="container">
        <div className="tavar_1">
          <div className="tavarlar">
            <PhoneDacumentN1 />
          </div>
          <div className="tavar2">
            <PhoneDacumentN1 />
          </div>
          <div className="tavar2">
            <PhoneDacumentN1 />
          </div>
        </div>
        <div className="malumot_Apple">
          <h3>Новые модели Айфонов по выгодным ценам</h3>
          <p>
            Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
            предлагает:
            <br /> <br />
            Низкие цены на все виды устройств, недорогие аксессуары;
            Оригинальные подарки бренда;
            <br /> Новая линейка смартфонов и проверенные старые модели;
            Лаконичный дизайн, большой выбор цветов и оттенков;
            <br /> Все товары в каталоге есть в наличии и доступны для покупки в
            кредит и рассрочку; <br />
            Быстрая доставка по Санкт-Петербургу и области;
            <br />
            Гарантия на все модели <br />
            телефонов; <br />
            Все способы оплаты! <br />
            Товары, представленные на официальном сайте Istoreapple.ru,
            сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы
            всегда можете прочитать отзывы о покупке наших клиентов, позвонить в
            магазин и получить консультацию по любой модели Apple. biz sizga 81
            yilga garatiya beramiz
          </p>
        </div>
        <div className="tab_img">
          <img src={imgta} alt="img" />
        </div>
        <div className="malumot_Apple">
          <h3>Новые модели Айфонов по выгодным ценам</h3>
          <p>
            Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru
            предлагает:
            <br /> <br />
            Низкие цены на все виды устройств, недорогие аксессуары;
            Оригинальные подарки бренда;
            <br /> Новая линейка смартфонов и проверенные старые модели;
            Лаконичный дизайн, большой выбор цветов и оттенков;
            <br /> Все товары в каталоге есть в наличии и доступны для покупки в
            кредит и рассрочку; <br />
            Быстрая доставка по Санкт-Петербургу и области;
            <br />
            Гарантия на все модели <br />
            телефонов; <br />
            Все способы оплаты! <br />
            Товары, представленные на официальном сайте Istoreapple.ru,
            сертифицированы. Мы занимаемся продажей айфонов с 2013 года. Вы
            всегда можете прочитать отзывы о покупке наших клиентов, позвонить в
            магазин и получить консультацию по любой модели Apple. biz sizga 81
            yilga garatiya beramiz
          </p>
        </div>
        <h1 className="NT1 nt2">Новинки</h1>
        <div className="tavar2">
          <PhoneDacumentN1 />
        </div>
        <div className="tavar2">
          <PhoneDacumentN1 />
        </div>
        <div className="skidlkaUz">
          <div className="skidka_img">
            <img src={skidka} alt="img" />
          </div>
          <div className="skidka_text">
            <h1>Подписка на рассылку акций!</h1>
            <h3>
              Подпишитесь на рассылку, чтобы узнавать о всех акциях первым
            </h3>
            <div className="subscribe">
              <h3>Скидка 50%</h3>
              <p>на первую покупку за подписку</p>
              <input type="number" placeholder="+998" />
              <button className="subskiribeBtn">подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
