import { Todo } from '../../Types/Todo';

export const findMaxUserId = (todos: Todo[]): number => {
  return Math.max(...todos.map(todo => todo.id)) + 1;
};
