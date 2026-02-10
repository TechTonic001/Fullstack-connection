const epxress = require('express');
const app = epxress();
const port = process.env.PORT || 4000;
require('dotenv').config();
const Cors = require('cors')


app.use(Cors())

require('./connection')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});