const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { generateMockData } = require('./helpers/generateMockData');

const app = express();
app.use(express.json());
const port = 4000;

const mockPatients = generateMockData(10);

const database = generateMockData(10);

app.get('/', (req, res) => {
  res.json({
    message: 'hello world!',
  });
});

app.get('/patients', (req, res) => {
  res.json(Object.values(database.patients));
});

app.get('/patients/:id', (req, res) => {
  console.log(database.patients, req.params.id);
  const value = database.patients[req.params.id];
  if (value) {
    res.json(value);
  }
  res.sendStatus(404);
});

app.get('/patients/:id/prescriptions', (req, res) => {
  const prescriptions = Object.values(database.prescriptions).filter(
    (prescription) => prescription.patientId === req.params.id
  );

  res.json(prescriptions || []);
});

app.post('/patients', (req, res) => {
  const { firstName, lastName } = req.body || {};
  if (!firstName || !lastName) {
    res.status(400).send('Error: Missing required fields');
  }
  const id = uuidv4();
  database.patients[id] = {
    id,
    firstName,
    lastName,
  };
  res.json(database.patients[id]);
});

app.get('/prescriptions', (req, res) => {
  res.json(Object.values(database.prescriptions));
});

app.get('/prescriptions/:id', (req, res) => {
  const value = database.prescriptions[req.params.id];
  if (value) {
    res.json(value);
  }
  res.sendStatus(404);
});

app.post('/prescriptions', (req, res) => {
  const { patientId, medication, dosage } = req.body || {};
  if (!patientId || !medication || !dosage) {
    res.status(400).send('Error: Missing required fields');
  }
  const id = uuidv4();
  database.prescriptions[id] = {
    id,
    patientId,
    medication,
    dosage,
    status: 'PENDING',
  };
  res.json(database.prescriptions[id]);
});

app.patch('/prescriptions/:id', (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
