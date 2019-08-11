const express = require('express');

const app = express();

app.use(express.static('static'));

app.listen(3030, () => 'App is currently running on port 80.');