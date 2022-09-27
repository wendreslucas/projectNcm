import express, { Request, Response } from 'express';
import connectToDatabase from './database';
import router from './routes/router';

const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

connectToDatabase();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
