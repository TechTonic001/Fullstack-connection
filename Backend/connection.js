const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.mongoose_uri

mongoose.connect()
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:');
}); 