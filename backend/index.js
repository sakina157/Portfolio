const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./database');

const app = express();
dotenv.config();

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL ,
    credentials: true,
}));

// ✅ Connect to MongoDB and Start Server
connectDB()
    .then(() => {
        console.log("✅ Connected to MongoDB");
        server.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
    });



module.exports = app;