import React, { useState, useEffect } from "react";
const WordContext = React.createContext();

function WordContextProvider(props) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const componentGetDataFromApi = async () => {
    const response = await fetch("/api/words");
    const wordsData = await response.json();
    setIsLoading(true);
    if (response.status !== 200) {
      console.log(wordsData.message);
      setIsLoading(false);
      throw Error(err.message);
    }
    setIsLoading(false);
    return wordsData;
  };

  useEffect(() => {
    componentGetDataFromApi()
      .then((words) => setWords(words))
      .catch(
        (err) => (setErr(err), setIsLoading(false), console.log(err.message))
      );
  }, []);

  const componentAddToApi = async (row) => {
    const data = {
      ...row,
      tags_json: '[" u0430u044du0440u043eu043fu043eu0440u0442"]',
    };
    // debugger;
    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newRow = await response.json();
    setIsLoading(true);
    try {
      if (response.ok) {
        setWords((words) => (words += newRow));
        setIsLoading(false);
        return words;
      }
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      return err.message;
    }
  };

  const componentChangeApi = async (id) => {
    const row = words.find((word) => word.id === id);
    console.log(row);

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
    };
    const response = await fetch(`api/words/${id}/update`, config);
    const jsonData = await response.json();
    setIsLoading(true);
    try {
      if (response.ok) {
        console.log(row);
        console.log(jsonData);
        setWords(jsonData);
        setIsLoading(false);
        return jsonData;
      }
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      return err.message;
    }
  };

  const componentDeleteFromApi = async (id) => {
    const response = await fetch(`/api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    setIsLoading(true);
    await response.json();
    try {
      if (response.ok) {
        const newArr = words.map((item) => {
          if (item.id !== id) {
            setIsLoading(false);
            return item;
          }
        });
        setIsLoading(false);
        setWords(() => newArr);
        return newArr;
      }
    } catch (err) {
      console.log(err.message);
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
