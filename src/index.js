import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import singerRouter from './routes/singerRoutes.js';

//variables
const app = express();
const singersEndpoint = '/api/v1/singers';
const { MONGO_URL, PORT } = process.env;

//middleware for json
app.use(express.json());
app.use(express.static('public'));

//open the server port
app.use(singersEndpoint, singerRouter);

//GET ALL
app.get('/', (req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    console.error(error);
  }
});

//start server
const startServer = async () => {
  try {
    mongoose.set(`strictQuery`, true);
    mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running @ ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
