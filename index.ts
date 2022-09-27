import express, { Request, Response } from 'express';
import connectToDatabase from './src/database';
import router from './src/routes/router';

const app = express();
const PORT = 8080;
const cors = require('cors');
const product = require('./api/product');

connectToDatabase();
app.use(cors());
app.use(express.json());
app.use('/api/product', product);
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
