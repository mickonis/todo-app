import _ from 'lodash';
import { FETCH_TODO_LIST, FETCH_TODO_ITEM, DELETE_TODO_ITEM } from '../actions/todoListAction';

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_TODO_LIST:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_TODO_ITEM:
      // const todoItem = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_TODO_ITEM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
