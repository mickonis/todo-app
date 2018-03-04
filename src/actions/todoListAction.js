import axios from 'axios';

export const FETCH_TODO_LIST = 'fetch_todo_list';
export const FETCH_TODO_ITEM = 'fetch_todo_item';
export const CREATE_TODO_ITEM = 'create_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
export const EDIT_TODO_ITEM = 'edit_todo_item';

const ROOT_URL = 'http://localhost:3001';

export function fetchTodoList() {
  const request = axios.get(`${ROOT_URL}/todos`);

  return {
    type: FETCH_TODO_LIST,
    payload: request
  };
}

export function fetchTodoItem(id) {
  const request = axios.get(`${ROOT_URL}/todos/${id}`);

  return {
    type: FETCH_TODO_ITEM,
    payload: request
  }
}

export function createTodoItem(values) {
  const request = axios.post(`${ROOT_URL}/todos`, values);

  return {
    type: CREATE_TODO_ITEM,
    payload: request
  }
}

export function deleteTodoItem(id) {
  const request = axios.delete(`${ROOT_URL}/todos/${id}`);

  return {
    type: DELETE_TODO_ITEM,
    payload: id
  }
}

export function editTodoItem(id) {
  const request = axios.patch(`${ROOT_URL}/todos/${id}`);

  return {
    type: EDIT_TODO_ITEM,
    payload: request
  }
}
