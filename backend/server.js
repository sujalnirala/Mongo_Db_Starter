// backend/server.js
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;
const uri = 'mongodb+srv://sujalnirala:YZSzaACzcDMnvdEv@cluster-1.eji2m.mongodb.net/?retryWrites=true&w=majority&appName=cluster-1';

app.use(express.json());
app.use(cors());

let db;
MongoClient.connect(uri)
    .then(client => {
        db = client.db('sample_mflix');
        console.log('Connected to MongoDB Atlas');
    })
    .catch(error => console.error(error));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.collection('users').findOne({ email });
    console.log("Post Request Accepted!!!")
    if (user && (password === user.password)) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});
app.listen(port, () => console.log(`Server running on port ${port}`));