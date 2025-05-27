const mongoose = require('mongoose');

const simulationSchema = new mongoose.Schema({
    algorithm: String,
    avgWaitingTime: Number,
    avgTurnaroundTime: Number,
    vehicleMetrics: Array,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Simulation', simulationSchema);
