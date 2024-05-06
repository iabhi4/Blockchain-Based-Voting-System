const express = require('express');
const path = require('path');

const app = express();
const port = 3002;

// Set the directory where your static files (including index.html) are located
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  // Serve the index.html file located in the frontend directory
  res.sendFile(path.join(__dirname, 'frontend', 'chairperson.html'));
});

app.get('/displayFields', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'displayFields.html'));
});

app.get('/ballot', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'ballot.html'));
});

app.get('/userProfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'userProfile.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
