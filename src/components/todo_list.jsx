import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTodoList, deleteTodoItem } from '../actions/todoListAction';

class TodoList extends Component{
  componentDidMount() {
    this.props.fetchTodoList();
  }

  onDeleteClick(id){
    this.props.deleteTodoItem(id);
  }

  renderTodoList() {
    let todoList = this.props.todoList;

    return _.map(todoList, todoItem => {
      return(
        <li key={todoItem.id}>
          <Link to={`/todo/${todoItem.id}`}>{todoItem.title}</Link>
          <div onClick={ () => this.onDeleteClick(todoItem.id)}>X</div>
        </li>
      )
    });
  }

  render() {
    return(
      <div>
        <h3>Todo List</h3>
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { todoList: state.todoList }
}

export default connect(mapStateToProps, { fetchTodoList, deleteTodoItem })(TodoList);
