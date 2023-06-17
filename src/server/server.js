const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

app.use(express.json());

const db = new sqlite3.Database(':memory:');

db.run('CREATE TABLE users (id INT, name TEXT)');

app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint to insert data into the table
app.post('/users', (req, res) => {
  const { id, name } = req.body;
  db.run(`INSERT INTO users VALUES (?, ?)`, [id, name], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
