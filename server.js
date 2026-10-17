const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// This fixes the browser security block automatically!
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve static files from the current directory
app.use(express.static(__dirname));

// Send index.html when someone visits the site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
