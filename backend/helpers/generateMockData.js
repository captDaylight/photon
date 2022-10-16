const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');

const drugNames = [
  'Acetaminophen',
  'Adderall',
  'Amitriptyline',
  'Amlodipine',
  'Citalopram',
  'Clindamycin',
  'Clonazepam',
  'Januvia',
  'Jardiance',
  'Kevzara',
  'Metoprolol',
  'Naloxone',
  'Naltrexone',
  'Naproxen',
  'Omeprazole',
  'Onpattro',
  'Otezla',
  'Ozempic',
  'Pantoprazole',
  'Xanax',
  'Zubsolv',
];

const generateMockData = (amountOfPatients) => {
  // generate random patients
  const patients = [...Array(amountOfPatients)].reduce((acc) => {
    const id = uuidv4();
    acc[id] = {
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
    return acc;
  }, {});

  // for each patient, generate random prescriptions
  const prescriptions = Object.keys(patients).reduce((acc, patientId) => {
    const randomNumber = Math.floor(Math.random() * 10);

    for (let i = 0; i < randomNumber; i++) {
      const id = uuidv4();
      acc[id] = {
        id,
        patientId,
        medication: faker.helpers.arrayElement(drugNames), // lol, this is probably so unrealistic 🤷‍♂️
        dosage: `${faker.random.numeric(3)} ${faker.helpers.arrayElement([
          'mg',
          'g',
          'ml',
        ])}`,
        status: faker.helpers.arrayElement([
          'PENDING',
          'IN_PROGRESS',
          'FILLED',
        ]),
      };
    }

    return acc;
  }, {});

  return {
    patients,
    prescriptions,
  };
};

module.exports = {
  generateMockData,
};
