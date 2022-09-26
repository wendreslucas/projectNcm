import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
