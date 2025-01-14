import express from 'express';
import bodyParser from 'body-parser';
import resourcesRoute from './routes/resourcesRoute.js';

const port = 2000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', resourcesRoute);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});