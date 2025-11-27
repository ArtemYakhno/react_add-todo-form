import todosFromServer from '../../api/todos';

export const findMaxUserId = (): number => {
  return Math.max(...todosFromServer.map(todo => todo.id)) + 1;
};
