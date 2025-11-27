import { Todo } from '../../Types/Todo';
import { User } from '../../Types/User';

type Props = {
  onAddTodo: (todo: Todo) => void;
  users: User[];
};

export const TodoFormAdd: React.FC<Props> = ({ onAddTodo, users }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const todo: Todo = {};

    onAddTodo(todo);
  };

  return (
    <>
      <h1>Add todo form</h1>

      <form onSubmit={handleSubmit} action="/api/todos" method="POST">
        <div className="field">
          <input type="text" data-cy="titleInput" />
          <span className="error">Please enter a title</span>
        </div>

        <div className="field">
          <select data-cy="userSelect">
            <option value="0" disabled>
              Choose a user
            </option>

            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>

          <span className="error">Please choose a user</span>
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>
    </>
  );
};
