import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  console.log(content);

  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR React</title>
  </head>
  <body>
      ${content}
      <script src="bundle.js"></script>
  </body>
  </html>`);
});

app.listen(3000, () => console.log('RUNNING ON PORT 3000'));
