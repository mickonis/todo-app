import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TodoListReducer from './todoListReducer';

const rootReducer = combineReducers({
    todoList: TodoListReducer,
    form: formReducer
});

export default rootReducer;
