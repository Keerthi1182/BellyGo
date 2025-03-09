const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const User = require('./models/User.js'); // ✅ Correct Import
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

app.use(cors()); // ✅ Place this at the top
app.use(express.json()); 

mongoose.connect("mongodb+srv://22911a1278:pTIJVMgUOMCmv99b@cluster0.35gji.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("DB connected successfully..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("<h2 align=center>Welcome To The Session</h2>");
});

// Register Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashpassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashpassword });
        await user.save();
        res.json({ message: "User registered successfully!" });
        console.log("User registration completed");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        res.json({ message: "Login Successful", username: user.username });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Login failed" });
    }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
