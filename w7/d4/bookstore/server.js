const express = require('express');
const app = express();
const sql = require('mysql');
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use('/static', express.static('static'));
app.listen(PORT, () => {
  console.log(`Server is running, yay!  Port ${PORT}`);
});

const connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bookstore'
});

/* connection.connect((err) => {
  if (err) {
    console.error();
  };
  console.log('connected');
});
*/

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/books', (req, res) => {
  connection.query('SELECT * FROM author;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });
});

app.get('/book_titles', (req, res) => {
  connection.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });
});

app.get('/authors_name', (req, res) => {
  connection.query('SELECT aut_name FROM author;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });
});

app.get('/category', (req, res) => {
  connection.query('SELECT cate_descrip FROM category;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });
});

app.get('/publishers_name', (req, res) => {
  connection.query('SELECT pub_name FROM publisher;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });
});

app.get('/price', (req, res) => {
  connection.query('SELECT book_price FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });
});

app.get('/book-list', (req, res) => {
  connection.query('SELECT aut_name, book_name, cate_descrip, pub_name, book_price FROM book_mast LEFT JOIN author ON book_mast.aut_id = author.aut_id LEFT JOIN category ON book_mast.cate_id = category.cate_id LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id ;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
    //console.log(rows);
  });

});