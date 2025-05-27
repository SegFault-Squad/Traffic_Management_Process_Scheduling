const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Simulation = require('./models/simulation');

const app = express();
app.use(express.json());
app.use(cors());

// Serve everything in public/ as static
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/traffic_sim')    // no extra options needed in v6+
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// POST: Save simulation
app.post('/api/simulations', async (req, res) => {
  try {
    const sim = new Simulation(req.body);
    await sim.save();
    res.status(201).json({ message: 'Simulation saved', sim });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Fetch all simulations
app.get('/api/simulations', async (req, res) => {
  const simulations = await Simulation.find().sort({ createdAt: -1 });
  res.json(simulations);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
