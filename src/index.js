import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  // some logic to initialize and load data into the store
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3000, () => console.log('RUNNING ON PORT 3000'));
