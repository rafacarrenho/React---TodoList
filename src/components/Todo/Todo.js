import React, { useState } from "react";
import PageHeader from "../PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState(false);
  const [filteredList, setFilteredList] = useState();

  const handleAdd = () => {
    if (description) {
      setList([...list, { description: description, done: false }]);
      clearInput();
    }
  };

  const clearInput = () => {
    setDescription("");
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleRemove = (item) => {
    setList((oldList) => {
      const newList = [...oldList];
      newList.splice(item, 1);
      return newList;
    });
  };

  const handleDone = (item) => {
    setList((oldList) => {
      const newList = [...oldList];
      newList[item].done = !newList[item].done;
      return newList;
    });
  };

  const clearFilteredList = () => {
    setFilteredList();
    setSearch(false);
  };

  const filterList = () => {
    const newList = [...list].filter((i) =>
      i.description.toLowerCase().includes(description.toLowerCase())
    );
    setSearch(true);
    setFilteredList(newList);
  };

  return (
    <div className="container">
      <PageHeader name="Lista de Tarefas" small="" />
      <TodoForm
        handleAdd={handleAdd}
        description={description}
        onChange={handleChange}
        search={search}
        clearFilteredList={clearFilteredList}
        filterList={filterList}
      />

      {search && (
        <div className="mt-4">
          <strong>Pesquisando por: </strong>
          {description}
        </div>
      )}

      <TodoList
        list={filteredList ? filteredList : list}
        handleRemove={handleRemove}
        handleDone={handleDone}
      />
    </div>
  );
};

export default Todo;
