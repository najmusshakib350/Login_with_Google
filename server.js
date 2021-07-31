const dotenv = require('dotenv');
dotenv.config({
    path: './config.env',
});


const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.error("MongoDB Connection Failed!"));

const port = process.env.PORT || 3501;

app.listen(port, () => {
    console.log(`App running on port ${port}!`);
})