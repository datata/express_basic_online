const express = require('express');
const app = express();

const port = 3000;

app.get('/welcome', (request, response) => {
    return response.send('Welcome');
});

app.listen(port, () => console.log('Server is running'));
