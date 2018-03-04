import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers/rootReducer'
import Header from './components/header';
import Footer from './components/footer';
import TodoList from './components/todo_list';
import TodoItemNew from './components/todo_item_new';
import TodoItemShow from './components/todo_item_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route path="/todo/new" component={TodoItemNew} />
            <Route path="/todo/:id" component={TodoItemShow} />
            <Route path="/" component={TodoList} />
          </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
