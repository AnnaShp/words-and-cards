import s from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../Images/icons_books.png";

export default function HeaderNav() {
  let checkClassActive = ({ isActive }) => (isActive ? `${s.active}` : "");

  return (
    <div className={s.header}>
      <nav className={s.menu}>
        <ul className={s.menu_items}>
          <NavLink to="/" className={checkClassActive}>
            <img src={icon} alt="icon_books" />
          </NavLink>
          <NavLink to="/" className={checkClassActive}>
            Главная страница
          </NavLink>
          <NavLink to="/cards" className={checkClassActive}>
            Карточки
          </NavLink>
          <NavLink to="/table" className={checkClassActive}>
            Таблица
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
