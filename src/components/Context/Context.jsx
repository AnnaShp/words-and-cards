import React, { useState, useEffect } from "react";
const WordContext = React.createContext();

function WordContextProvider(props) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const componentDidMount = async () => {
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
    componentDidMount()
      .then((words) => setWords(words))
      .catch(
        (err) => (setErr(err), setIsLoading(false), console.log(err.message))
      );
  }, []);

  const componentAdd = async (row) => {
    // debugger;
    console.log(row);

    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(row),
    });

    const newRow = await response.json();
    console.log(response);
    console.log(newRow);
    setIsLoading(!isLoading);
    try {
      if (response.ok) {
        setWords(newRow);
        console.log(words);
        setIsLoading(isLoading);
        return words;
      }
    } catch (err) {
      console.log(err);
      setIsLoading(isLoading);
      return err.message;
    }
  };

  // const componentChange = async (id) => {
  //   const row = words.find((word) => word.id === id);
  //   const config = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(row),
  //   };

  //   try {
  //     const response = await fetch(`api/words/:id/update`, config);
  //     const jsonData = await response.json();
  //     setIsLoading(!isLoading);
  //     if (response.ok) {
  //       setWords(row);
  //       console.log(jsonData);
  //       console.log(words);
  //       console.log(row);
  //       setIsLoading(isLoading);
  //       return row;
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //     setIsLoading(isLoading);
  //     return err.message;
  //   }
  // };

  return (
    <WordContext.Provider value={{ words, componentAdd, isLoading, err }}>
      {props.children}
    </WordContext.Provider>
  );
}

export { WordContextProvider, WordContext };
