// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route to get all crops
app.get('/api/crops', (req, res) => {
    // Placeholder for crop data
    const crops = [
        { id: 1, name: 'Wheat', quantity: 100 },
        { id: 2, name: 'Rice', quantity: 200 }
    ];
    res.json(crops);
});

// Route to add a new crop
app.post('/api/crops', (req, res) => {
    const newCrop = req.body;
    // Logic to add crop to the database goes here
    res.status(201).json(newCrop);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
