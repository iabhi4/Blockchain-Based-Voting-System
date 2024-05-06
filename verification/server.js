//const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'sanjyot',
  password: 'sanjyot', // Replace with your MySQL password
  database: 'verification',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed', err);
    return;
  }
  console.log('Connected to MySQL');
  seedDatabase();
});

const express = require('express');
const app = express();
app.use(express.json());

const seedDatabase = () => {
  const dummyData = [['12345'], ['67890'], ['11111'], ['22222'], ['33333']];

  // Check if the 'users' table exists
  db.query('SHOW TABLES LIKE "users"', (err, result) => {
    if (err) {
      console.error('Error checking table existence', err);
      process.exit(1);
    }

    if (result.length === 0) {
      // Table does not exist, create it
      db.query(
        'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, document_number VARCHAR(255))',
        (err, result) => {
          if (err) {
            console.error('Error creating table', err);
            process.exit(1);
          }
          console.log('Table created');
          insertData(dummyData);
        }
      );
    } else {
      // Table exists, clear and insert data
      clearAndInsertData(dummyData);
    }
  });
};

const clearAndInsertData = (dummyData) => {
  db.query('DELETE FROM users', (err, result) => {
    if (err) {
      console.error('Error clearing table', err);
      process.exit(1);
    }
    console.log('Table cleared');

    insertData(dummyData);
  });
};

const insertData = (dummyData) => {
  db.query(
    'INSERT INTO users (document_number) VALUES ?',
    [dummyData],
    (err, result) => {
      if (err) {
        console.error('Error inserting data', err);
        process.exit(1);
      }
      console.log('Inserted dummy data:', result.affectedRows);
    }
  );
};

// Use CORS middleware
app.use(cors({ origin: 'http://127.0.0.1:5173' }));

app.post('/verifyDocument', (req, res) => {
  const { documentNumber } = req.body;
  console.log('Received document number:', documentNumber);

  db.query(
    'SELECT * FROM users WHERE document_number = ?',
    [documentNumber],
    (err, results) => {
      if (err) {
        console.error('Error executing query', err);
        res.status(500).json({ verified: false });
        return;
      }

      const verified = results.length > 0;
      console.log('Verification result:', verified);
      res.json({ verified });
    }
  );
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
