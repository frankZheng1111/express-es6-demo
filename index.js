import Express from 'express';

let app = Express();

app.get('/', (req, res) => {
  res.send(`Hello world!`);
});

app.listen(3000, () => {
  console.log('server running http://localhost:4321');
});
