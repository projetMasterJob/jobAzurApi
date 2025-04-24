const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const indexRoutes = require('./src/routes');
app.use('/api', indexRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port : ${PORT}`);
});