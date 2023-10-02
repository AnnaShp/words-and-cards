import "./Header.scss";
import React, { useState } from "react";

export default function Header() {
  return (
    <div className="header">
      <nav className="menu">
        <ul>
          <li>
            <a href="#">Главная страница</a>
          </li>
          <li>
            <a href="#cards">Карточки</a>
          </li>
          <li>
            <a href="#table">Таблица</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
