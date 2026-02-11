const epxress = require('express');
const app = epxress();
const port = process.env.PORT || 4000;
require('dotenv').config();
const Cors = require('cors')


app.use(Cors())
app.use(epxress.json())

require('./connection')


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/info',(req,res)=>{
    const {name,email,password} = req.body;
    let details = {name, email, password}
    res.status(201).json({message:details})
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});