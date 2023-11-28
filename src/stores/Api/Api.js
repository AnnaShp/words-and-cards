// берем данные с сервера
const getDataFromApi = async () => {
  const response = await fetch("/api/words");
  const data = await response.json();
  return data;
};

// добавление данных на сервер
const addToApi = async (row) => {
  const rowData = {
    ...row,
    tags_json: '[" u0430u044du0440u043eu043fu043eu0440u0442"]',
  };

  const response = await fetch("/api/words/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rowData),
  });

  const data = await response.json();
  return data;
};

// изменение данных на сервере
const changeApi = async (row) => {
  const rowData = {
    ...row,
    tags_json: '[" u0430u044du0440u043eu043fu043eu0440u0442"]',
  };
  const id = row.id;

  const response = await fetch(`api/words/${id}/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rowData),
  });

  const data = await response.json();
  return data;
};

// удаление данных с сервера
const deleteFromApi = async (id) => {
  const response = await fetch(`/api/words/${id}/delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

  const rowData = await response.json();
  const data = rowData.filter((item) => item.id !== id);
  return data;
};

export { getDataFromApi, addToApi, changeApi, deleteFromApi };
