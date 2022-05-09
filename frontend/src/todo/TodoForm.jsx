import React from "react";

import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

const TodoForm = (props) => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        id="description"
        type="text"
        className="form-control"
        placeholder="Adicione uma tarefa"
        onChange={props.handleChange}
        value={props.description}
      />
    </Grid>
    <Grid cols="12 3 2">
        <IconButton customStyle="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton customStyle="info" icon="search" onClick={props.handleSearch} />
        <IconButton customStyle="default" icon="close" onClick={props.handleClear} />
    </Grid>
  </div>
);

export default TodoForm;
