const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { testConnection } = require("./test-db");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const indexRoutes = require('./src/routes');
app.use('/api', indexRoutes);

// Test de la bdd
app.get("/test-db", async (req, res) => {
    const result = await testConnection();
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message, error: result.error.message });
    }
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port : ${PORT}`);
});