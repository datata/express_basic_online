const express = require('express');
const app = express();
const router = require('./router');

const port = process.env.PORT || 3000;

app.use(router);

app.get('/welcome', (request, response) => {
    return response.send('Welcome');
});

app.listen(port, () => console.log('Server is running'));
