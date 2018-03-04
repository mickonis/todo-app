import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodoItem } from '../actions/todoListAction';

class TodoItemShow extends Component{
  componentDidMount() {
    if(!this.props.todoItem){
      const { id } = this.props.match.params;
      this.props.fetchTodoItem(id);
    }
  }

  render() {
    const todoItem = this.props.todoItem;

    if(!todoItem){
      return <div>Loading...</div>
    }

    return(
      <div>
        <h3>{todoItem.title}</h3>
      </div>
    )
  }
}

function mapStateToProps( state, ownProps ) {
  console.log(state.todoList);

  return { todoItem: state.todoList[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchTodoItem })(TodoItemShow);
