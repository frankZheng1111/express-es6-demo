import Express from 'express';

import path from 'path'
import db from './models'

let app = Express();


// 设置模板目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'jade');

app.set('layout', 'layouts/layout');

app.get('/', (req, res) => {
  let base = new db.Base();
  res.send(base.sayHi());
});

app.get('/jade', (req, res) => {
  res.render('index', {wordStr:"Hello my world"});
});

app.listen(3000, () => {
  console.log('server running http://localhost:3000');
});
