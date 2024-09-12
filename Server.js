// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Définir les routes
app.use('/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
