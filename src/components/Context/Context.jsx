import React, { useState, useEffect } from "react";
const WordContext = React.createContext();

function WordContextProvider(props) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const componentDidMount = async () => {
    const response = await fetch("/api/words");
    const data = await response.json();
    setIsLoading(!isLoading);
    if (response.status !== 200) {
      console.log(data.message);
      setIsLoading(isLoading);
      // throw Error(data.message);
      throw Error(err.message);
    }
    // console.log(data);
    // console.log(err);
    setIsLoading(isLoading);
    return data;
  };

  const componentChange = async () => {
    let data;
    // const config = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(words),
    // };

    try {
      const response = await fetch("api/words/:id/update", {
        method: "POST",
      });
      data = await response.json();
      setIsLoading(!isLoading);
      if (response.ok) {
        console.log(data);
        setWords(words);
        setIsLoading(isLoading);
        return data;
      }
    } catch (err) {
      console.log(err);
      setIsLoading(isLoading);
      return err.message;
    }
  };

  useEffect(() => {
    componentDidMount()
      .then((words) => setWords((words = words)))
      .catch((err) => (setErr(err), setIsLoading(isLoading), console.log(err)));
  }, []);

  useEffect(() => {
    componentChange()
      // .then((words) => setWords((words = words)))
      .catch((err) => (setErr(err), setIsLoading(isLoading), console.log(err)));
  }, []);

  return (
    <WordContext.Provider value={{ words, isLoading, componentChange, err }}>
      {props.children}
    </WordContext.Provider>
  );
}

export { WordContextProvider, WordContext };
