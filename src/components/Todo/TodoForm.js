import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = ({
  description,
  onChange,
  handleAdd,
  search,
  clearFilteredList,
  filterList,
}) => {
  const handleKey = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            type="text"
            placeholder="Adicione uma tarefa"
            value={description}
            onKeyUp={handleKey}
            onChange={(e) => onChange(e)}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            customStyle="primary"
            disabled={search || !description}
            icon="plus"
            onClick={handleAdd}
          />
          <IconButton
            customStyle="info"
            icon="search"
            disabled={!description}
            onClick={filterList}
          />
          <IconButton
            customStyle="light"
            disabled={!search}
            icon="close"
            onClick={clearFilteredList}
          />
        </Grid>
      </div>
    </div>
  );
};

export default TodoForm;
