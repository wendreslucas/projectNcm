require('dotenv').config();
import mongoose from 'mongoose';

function connectToDatabase() {
  mongoose
    .connect(process.env.URL_MONGO)
    .then((data) => {
      console.log('Mongoose Connected');
    })
    .catch((err) => {
      console.log('Error connecting to Mongoose', err.message);
    });
  const database = mongoose.connection;
  database.on('error', (err) => console.error(err.message));
  database.once('open', () => console.log('Connected to database'));
}

export default connectToDatabase;
