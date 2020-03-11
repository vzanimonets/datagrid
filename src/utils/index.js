import { seed, name as _name, internet, phone as _phone } from "faker";
export const getPersonData = async (n, sortKey, dir) => {
  const data = [];
  seed(1);
  for (let i = 0; i < n; i++) {
    const person = {
      name: _name.findName(),
      email: internet.email(),
      phone: _phone.phoneNumber()
    };
    data.push(person);
  }
  return await sortData(data, sortKey, dir);
};
const sortData = async (data, sortKey, dir) => {
  return data.sort((a, b) => {
    //const type = dir === "asc" ? 1 : -1;
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
};
