import 'dotenv/config';
import express from 'express';
import connectDB from './db';
import globalRouter from './global-router';
import { logger } from './logger';

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(logger);
app.use(express.json());
app.use('/api/v1/',globalRouter);


app.get('/',(request,response) =>{
  response.send("Hello World!");
})

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
