import Express from 'express';

import db from './models'

let app = Express();

app.get('/', (req, res) => {
  let base = new db.Base();
  res.send(base.sayHi());
});

app.listen(3000, () => {
  console.log('server running http://localhost:3000');
});
