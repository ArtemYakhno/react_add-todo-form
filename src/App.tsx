import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { Todo } from './Types/Todo';
import { useState } from 'react';
import { TodoFormAdd } from './components/TodoFormAdd/TodoFormAdd';
import { TodoList } from './components/TodoList';
import { findMaxUserId } from './components/Services/Todo';
import { findUserById } from './components/Services/User';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    return todosFromServer.map(todo => ({
      ...todo,
      user: findUserById(todo.userId),
    }));
  });

  const handleAddTodo = (title: string, userId: number) => {
    const newTodo: Todo = {
      id: findMaxUserId(todos),
      title: title,
      completed: false,
      userId: userId,
      user: findUserById(userId),
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoFormAdd onAddTodo={handleAddTodo} users={usersFromServer} />
      <TodoList todos={todos} />
    </div>
  );
};
