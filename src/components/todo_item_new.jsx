import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createTodoItem } from '../actions/todoListAction';

class TodoItemNew extends Component {
  renderField(field){
    return(
      <input
        type="text"
        {...field.input}/>
    )
  }

  onSubmit(values) {
    this.props.createTodoItem(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        create new todo item
        <Field
          name="title"
          component={this.renderField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'TodoItemNewForm'
})(
  connect(null, { createTodoItem })(TodoItemNew)
);
