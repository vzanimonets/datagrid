import {
  seed,
  name as _name,
  internet,
  phone as _phone,
  date as _date
} from "faker";

export const getPersonData = async (n, sortKey = "id", dir) => {
  seed(1);
  const data = [];
  for (let i = 1; i <= n; i++) {
    const _age = Math.floor(Math.random() * (60 - 16)) + 15;
    const _registrDate = _date.recent(_age * 365);
    const person = {
      id: i,
      name: _name.findName(),
      email: internet.email(),
      phone: _phone.phoneNumber(),
      age: _age,
      date: _registrDate
    };
    data.push(person);
  }
  return data;
};
