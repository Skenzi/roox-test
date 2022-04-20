/* eslint no-unused-vars: "off" */
import { User } from '../types/types';

const getUserValue = (user: User, userKey: string): string => {
  if (userKey === 'city') {
    return user.address.city;
  }
  if (userKey === 'company') {
    return user.company.name;
  }
  return '';
};

const quickSortUsers = (users: User[], userKey: string): User[] => {
  if (users.length < 2 || !userKey) {
    return users;
  }
  const middleInd = Math.floor(users.length / 2);
  const middleUser = users[middleInd];
  const middleUserValue = getUserValue(middleUser, userKey);
  const less = [];
  const greater = [];
  for (let i = 0; i < users.length; i += 1) {
    const user = users[i];
    const userValue = getUserValue(user, userKey);
    if (user.id !== middleUser.id) {
      if (userValue > middleUserValue) {
        greater.push(user);
      } else {
        less.push(user);
      }
    }
  }
  return [...quickSortUsers(less, userKey), middleUser, ...quickSortUsers(greater, userKey)];
};

export default quickSortUsers;
