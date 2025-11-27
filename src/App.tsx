import './App.scss';
import { TodoList } from './components/TodoList';
import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { Todo } from './Types/Todo';
import { useState } from 'react';
import { TodoFormAdd } from './components/TodoFormAdd/TodoFormAdd';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(todosFromServer);

  const hadleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoFormAdd onAddTodo={hadleAddTodo} users={usersFromServer} />
      <TodoList todos={todos} />
    </div>
  );
};
