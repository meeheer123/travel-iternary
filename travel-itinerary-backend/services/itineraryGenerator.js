const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI({ apiKey: process.env.GENERATIVE_AI_API_KEY });

const generateItinerary = async (destination, startDate, endDate, budget, travelers, interests) => {
  const duration = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1;

  const prompt = `You are a travel itinerary planner. Generate a detailed, personalized ${duration}-day travel itinerary for ${travelers} traveler(s) visiting ${destination} with a budget of $${budget}. The travelers are interested in ${interests.join(', ')}.

  For each day:
  1. Provide a main activity with a descriptive name.
  2. Include a detailed description of the activity, its significance, and why it’s worth visiting.
  3. Include a suggested time of day for the activity (morning, afternoon, evening).
  4. Provide location details such as the best address or landmark information.
  5. Suggest an image link related to the activity (you can provide keywords or a description to be used for fetching images).
  6. Include an alternative or optional activity for each day, which is either budget-friendly or suitable for different interests.
  
  Return the itinerary in the following JSON format:
  {
    "activities": [
      {
        "day": 1,
        "activity": "Activity name",
        "description": "A detailed description of the activity and its significance.",
        "time": "Suggested time of day",
        "location": "Location details",
        "image": "Keywords or description for an image of the activity",
        "alternative": {
          "activity": "Alternative activity name",
          "description": "Brief description of the alternative activity",
          "image": "Keywords or description for an image of the alternative activity"
        }
      },
      ...
    ]
  }
  
  Ensure the itinerary is highly relevant to the traveler's interests, destination, and budget. The activities should be engaging, diverse, and exciting. Each description should highlight the cultural, historical, or recreational significance of the activity. Keep the tone informative and enthusiastic.`;
  

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();
    console.log('Raw response:', responseText); // Log raw response

    // Check if the response contains any extraneous characters
    const jsonString = responseText.replace(/^```json|```$/g, ''); // Remove possible markdown
    const itinerary = JSON.parse(jsonString);

    itinerary.activities = itinerary.activities.map(activity => ({
      ...activity,
      image: `https://source.unsplash.com/800x600/?${encodeURIComponent(destination + ' ' + activity.activity)}`
    }));

    return itinerary;

  } catch (error) {
    console.error('Error generating itinerary:', error);
    throw error;
  }
};

module.exports = { generateItinerary };