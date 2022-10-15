const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

const generatePatientData = (amount) => {
  return [...Array(amount)].reduce((acc) => {
    const id = uuidv4();
    acc[id] = {
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
    return acc;
  }, {});
};

module.exports = {
  generatePatientData,
};
