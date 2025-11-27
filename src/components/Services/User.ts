import { User } from '../../Types/User';
import usersFromServer from '../../api/users';

export const findUserById = (id: number): User | null => {
  return usersFromServer.find(user => user.id === id) || null;
};
