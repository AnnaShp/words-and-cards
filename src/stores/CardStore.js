import React from "react";
import { action, observable, computed } from "mobx";
import { getDataFromApi, addToApi, changeApi, deleteFromApi } from "./Api/Api";

class CardStores extends React.Component {
  @observable words = [];
  @action fetchData = async () => {
    const response = await getDataFromApi();
    this.words = response;
    return this.words;
  };

  @action addWord = (word) => {
    // this.words.addToApi();
    return this.words.push(word);
  };

  @action removeWord = (key) => {
    return this.words.splice(key, 1);
  };

  @action updateWord = (row) => {
    this.words.find((item) => row.id === item.id);
  };
}

export default CardStores;
