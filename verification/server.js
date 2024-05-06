//const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'node_user',
    password: '123456', // Replace with your MySQL password
    database: 'verification'
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection failed', err);
        return;
    }
    console.log('Connected to MySQL');
});

const express = require('express');
const app = express();
app.use(express.json());


// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5174'
}));

app.post('/verifyDocument', (req, res) => {
    const { documentNumber } = req.body;
    console.log("Received document number:", documentNumber);

    db.query('SELECT * FROM users WHERE document_number = ?', [documentNumber], (err, results) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ verified: false });
            return;
        }

        const verified = results.length > 0;
        console.log("Verification result:", verified);
        res.json({ verified });
    });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
