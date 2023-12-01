import React from "react";
import { action, observable } from "mobx";
import { getDataFromApi, addToApi, changeApi, deleteFromApi } from "./Api/Api";

class CardStores extends React.Component {
  @observable words = [];
  constructor(props) {
    super(props);
    this.fetchData();
  }

  // данные с сервера
  @action fetchData = async () => {
    try {
      const response = await getDataFromApi();
      this.setWords(response);
    } catch (err) {
      console.log("Ошибка при получении данных: ", err);
    }
  };

  // изменение массива данных
  @action setWords = (response) => {
    this.words = response;
  };

  // добавление строки
  @action addWord = async (row) => {
    try {
      const response = await addToApi(row);
      this.setWords(response);
    } catch (err) {
      console.log("Не могу добавить строку: ", err);
    }
  };

  // изменение строки
  @action updateWord = async (row) => {
    try {
      const response = await changeApi(row);
      if (response.ok) {
        this.setWords(response);
      }
    } catch (err) {
      console.log("Не могу обновить строку: ", err);
    }
  };

  // удаление строки
  @action removeWord = async (row) => {
    try {
      const response = await deleteFromApi(row);
      if (response.ok) {
        this.setWords(response);
      }
    } catch (err) {
      console.log("Не могу удалить строку: ", err);
    }
  };
}

export default CardStores;
