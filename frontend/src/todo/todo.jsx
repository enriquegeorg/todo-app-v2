import React, { Component } from "react";
import axios from "axios";

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  refresh(description = "") {
    console.log("refresh", description);
    const search = description ? `&description__regex=/${description}/` : "";
    console.log("search", search);
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((resp) =>
        this.setState({ ...this.state, description, list: resp.data }),
      );
  }

  handleSearch() {
    console.log("search", this.state.description);
    this.refresh(this.state.description);
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp) => {
      this.setState((resp) => this.refresh());
    });
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((resp) => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then((resp) => {
      this.refresh(this.state.description);
    });
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((resp) => this.refresh(this.state.description));
  }

  handleChange(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleClear() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <PageHeader name="Taréfas" small="Cadastro" />
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />

        <h2>Nossa história</h2>
        <p>Lorem ipsum dodod</p>
      </div>
    );
  }
}
