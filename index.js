const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Main Path
app.get('/', (req, res) => res.send("API Active"));

// Endpoint Bot WA
app.get('/bot', (req, res) => {
    const { target, msg } = req.query;
    res.json({ status: "Success", to: target, message: msg });
});

// Endpoint Attack (C&C Logic)
app.get('/attack', async (req, res) => {
    const { target, port, time } = req.query;
    if (!target) return res.status(400).json({ error: "Target required" });
    
    // Logic: Trigger external stressor/botnet
    res.json({ 
        status: "Attack Sent", 
        target, 
        port: port || 80, 
        duration: time || 60 
    });
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
