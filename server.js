const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Set the directory where your static files (including index.html) are located
app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  // Serve the index.html file located in the frontend directory
  res.sendFile(path.join(__dirname, 'frontend', 'ballot.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
