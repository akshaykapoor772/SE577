const express = require('express');
const app = express();
const fs = require('fs');
const yaml = require('js-yaml');

const cors = require('cors');

app.use(cors());

// Your other routes and middleware

app.listen(5002, () => {
  console.log('Server is listening on port 5002');
});

const port = 5001;
const ymlFile = 'test.yml';

app.get('/get-repo-list', (req, res) => {
  console.log('Received GET request');
  try {
    const fileContents = fs.readFileSync('test.yml', 'utf8');
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
