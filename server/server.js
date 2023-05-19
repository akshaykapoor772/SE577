const express = require('express');
const app = express();
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const cors = require('cors');

app.use(cors());

// Your other routes and middleware

const port = 5002;
const ymlFile = path.join(__dirname, 'test.yml');

app.get('/get-repo-list', (req, res) => {
  console.log('Received GET request');
  try {
    const fileContents = fs.readFileSync(ymlFile, 'utf8');
    const data = yaml.load(fileContents);
    console.log('Sending response:', data);
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
