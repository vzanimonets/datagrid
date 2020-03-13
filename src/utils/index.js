import { seed, name as _name, internet, phone as _phone } from "faker";
import _ from "lodash";
export const getPersonData = async (n, sortKey = "id", dir) => {
  seed(1);
  const data = [];
  for (let i = 1; i <= n; i++) {
    const person = {
      id: i,
      name: _name.findName(),
      email: internet.email(),
      phone: _phone.phoneNumber(),
      age: Math.floor(Math.random() * (60 - 16)) + 15
    };
    data.push(person);
  }
  //const sorted = await dataSort(data, sortKey, dir);
  // const sorted = _.sortBy(
  //   data,
  //   [item => item.name.toLowerCase(), "age"],
  //   ["asc"]
  // );
  return data;
};
const dataSort = (data, sortKey, dir) => {
  switch (sortKey) {
    case "id":
      return sortById(data, sortKey, dir);
    case "name":
      return sortByName(data, sortKey, dir);
    case "age":
      return sortByAge(data, sortKey, dir);
    case "email":
      return sortByEmail(data, sortKey, dir);
    case "phone":
      return sortByPhone(data, sortKey, dir);
    default:
      return data;
  }
};
const sortById = (data, sortKey, dir) => {
  const sorted = data.sort((a, b) => Number(a.id) - Number(b.id));
  if (dir === "desc") return sorted.reverse();
  return sorted;
};
const sortByAge = (data, sortKey, dir) => {
  const sorted = data.sort((a, b) => Number(a.age) - Number(b.age));
  if (dir === "desc") return sorted.reverse();
  return sorted;
};
const sortByName = (data, sortKey, dir) => {
  const sorted = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  if (dir === "desc") return sorted.reverse();
  return sorted;
};
const sortByEmail = (data, sortKey, dir) => {
  const sorted = data.sort((a, b) => {
    if (a.email > b.email) {
      return 1;
    }
    if (a.email < b.email) {
      return -1;
    }
    return 0;
  });
  if (dir === "desc") return sorted.reverse();
  return sorted;
};
const sortByPhone = (data, sortKey, dir) => {
  const sorted = data.sort((a, b) => {
    if (a.phone > b.phone) {
      return 1;
    }
    if (a.phone < b.phone) {
      return -1;
    }
    return 0;
  });
  if (dir === "desc") return sorted.reverse();
  return sorted;
};
