const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const mongoURI = 'mongodb+srv://icarofne:HaIl1tV2da1mZ6gV@cluster0.bewozf3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('Hello from Node.js, Express and MongoDB!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
