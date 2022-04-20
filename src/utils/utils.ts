/* eslint no-unused-vars: "off" */
import { User, MappingSortProps } from '../types/types';

const quickSortCity = (users: User[]): User[] => {
  if (users.length < 2) {
    return users;
  }
  const middleInd = Math.floor(users.length / 2);
  const middleUser = users[middleInd];
  const less = [];
  const greater = [];
  for (let i = 0; i < users.length; i += 1) {
    const user = users[i];
    if (user.id !== middleUser.id) {
      if (user.address.city > middleUser.address.city) {
        greater.push(user);
      } else {
        less.push(user);
      }
    }
  }
  return [...quickSortCity(less), middleUser, ...quickSortCity(greater)];
};

const quickSortCompany = (users: User[]): User[] => {
  if (users.length < 2) {
    return users;
  }
  const middleInd = Math.floor(users.length / 2);
  const middleUser = users[middleInd];
  const less = [];
  const greater = [];
  for (let i = 0; i < users.length; i += 1) {
    const user = users[i];
    if (user.id !== middleUser.id) {
      if (user.company.name > middleUser.company.name) {
        greater.push(user);
      } else {
        less.push(user);
      }
    }
  }
  return [...quickSortCompany(less), middleUser, ...quickSortCompany(greater)];
};

const mappingSorts: MappingSortProps = {
  company: quickSortCompany,
  city: quickSortCity,
  without: (users) => users,
};

export default mappingSorts;
