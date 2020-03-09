const faker = require("faker");
export const getPersonData = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  };
};
