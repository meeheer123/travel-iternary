const express = require('express');
const router = express.Router();
const Itinerary = require('../models/Itinerary');
const { generateItinerary } = require('../services/itineraryGenerator');

router.post('/generate-itinerary', async (req, res) => {
  try {
    const { destination, startDate, endDate, budget, travelers, interests } = req.body;

    const generatedItinerary = await generateItinerary(destination, startDate, endDate, budget, travelers, interests);
    
    const newItinerary = new Itinerary({
      destination,
      startDate,
      endDate,
      budget,
      travelers,
      interests,
      activities: generatedItinerary.activities
    });

    await newItinerary.save();

    res.status(201).json(newItinerary);
  } catch (error) {
    console.error('Error generating itinerary:', error);
    res.status(500).json({ message: 'Error generating itinerary', error: error.message });
  }
});

router.get('/itinerary/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }
    res.json(itinerary);
  } catch (error) {
    console.error('Error fetching itinerary:', error);
    res.status(500).json({ message: 'Error fetching itinerary' });
  }
});

module.exports = router;