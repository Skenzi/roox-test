/* eslint no-unused-vars: "off" */
import { User, MappingSortProps } from '../types/types';

const quickSortCity = (arr: User[]): User[] => {
  if (arr.length < 2) {
    return arr;
  }
  const middleInd = Math.floor(arr.length / 2);
  const middleUser = arr[middleInd];
  const less = [];
  const greater = [];
  for (let i = 0; i < arr.length; i += 1) {
    const user = arr[i];
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

const quickSortCompany = (arr: User[]): User[] => {
  if (arr.length < 2) {
    return arr;
  }
  const middleInd = Math.floor(arr.length / 2);
  const middleUser = arr[middleInd];
  const less = [];
  const greater = [];
  for (let i = 0; i < arr.length; i += 1) {
    const user = arr[i];
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
};

export default mappingSorts;
