const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
const MONGO_URL = 'mongodb+srv://NASA-api:admin@nasacluster.1mspydi.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}