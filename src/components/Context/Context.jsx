import React, { useState, useEffect } from "react";
const WordContext = React.createContext();

function WordContextProvider(props) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  // берем данные с сервера
  const componentGetDataFromApi = async () => {
    const response = await fetch("/api/words");
    const wordsData = await response.json();
    setIsLoading(true);
    try {
      if (response.ok) {
        setIsLoading(false);
        return wordsData;
      }
    } catch (err) {
      console.log(wordsData.message);
      setIsLoading(false);
      throw Error(err.message);
    }
  };

  // обновление таблицы
  useEffect(() => {
    componentGetDataFromApi()
      .then((words) => setWords(words))
      .catch(
        (err) => (setErr(err), setIsLoading(false), console.log(err.message))
      );
  }, [words]);

  // добавление данных на сервер
  const componentAddToApi = async (row) => {
    const data = {
      ...row,
      tags_json: '[" u0430u044du0440u043eu043fu043eu0440u0442"]',
    };

    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newRows = await response.json();
    setIsLoading(true);
    try {
      if (response.ok) {
        setWords(newRows);
        setIsLoading(false);
        return words;
      }
    } catch (err) {
      setIsLoading(false);
      return err.message;
    }
  };

  // изменение данных на сервере
  const componentChangeApi = async (row) => {
    const data = {
      ...row,
      tags_json: '[" u0430u044du0440u043eu043fu043eu0440u0442"]',
    };
    const id = row.id;

    const response = await fetch(`api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newRows = await response.json();
    setIsLoading(true);
    try {
      if (response.ok) {
        setWords(newRows);
        setIsLoading(false);
        return words;
      }
    } catch (err) {
      setIsLoading(false);
      return err.message;
    }
  };

  // удаление данных с сервера
  const componentDeleteFromApi = async (id) => {
    const response = await fetch(`/api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });

    await response.json();
    setIsLoading(true);
    try {
      if (response.ok) {
        const newArr = words.filter((item) => item.id !== id);
        setWords(newArr);
        setIsLoading(false);
        return newArr;
      }
    } catch (err) {
      setIsLoading(false);
      return err.message;
    }
  };

  return (
    <WordContext.Provider
      value={{
        words,
        componentAddToApi,
        componentChangeApi,
        componentDeleteFromApi,
        isLoading,
        err,
      }}
    >
      {props.children}
    </WordContext.Provider>
  );
}

export { WordContextProvider, WordContext };
