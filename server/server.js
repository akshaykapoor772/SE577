const express = require('express');
const app = express();
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const cors = require('cors');
require('dotenv').config();

app.use(cors());

const port = 5002;
const ymlFile = path.join(__dirname, 'test.yml');
const url = 'https://api.github.com/users/akshaykapoor772/repos';
const apiKey1 = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

app.get('/repos', async (req, res) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey1}`,
      },
    });
    const data = await response.json();
    if (Array.isArray(data)) {
      const repos = data.map((user) => {
        const { id, login, avatar_url, html_url, name, full_name } = user;
        const repositoryName = name || full_name || 'Unnamed Repository';
        return {
          id,
          login,
          avatar_url,
          html_url,
          repositoryName,
        };
      });
      res.status(200).json(repos);
    } else {
      res.status(500).send('Internal Server Error');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal Server Error');
  }
});


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
