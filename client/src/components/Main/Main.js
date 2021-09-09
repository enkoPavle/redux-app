import { Switch, Route } from 'react-router-dom';

import TodoList from '../TodoList/TodoList';
import AddTodoListItem from '../AddTodoListItem/AddTodoListItem';

import './main.css'

const Main = () => {

  return (
    <main className='main'>
      <Switch>
        <Route exact path='/' component={TodoList} />
        <Route path='/new' component={AddTodoListItem} />
      </Switch>
    </main>
  )
};

export default Main