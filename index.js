import express from 'express';
import bodyParser from 'body-parser';
import resourcesRoute from './routes/resourcesRoute.js';

const port = 2000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', resourcesRoute);

server.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});