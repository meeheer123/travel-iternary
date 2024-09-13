# Personalized Travel Itinerary Generator

## Overview

The Personalized Travel Itinerary Generator is a web application that creates custom travel plans based on user preferences. By leveraging the power of Google's Gemini API for intelligent itinerary generation and React for a responsive front-end, this application offers a unique and tailored travel planning experience.

## Features

- User-friendly interface for inputting travel preferences
- Dynamic itinerary generation based on:
  - Destination
  - Trip duration
  - Budget
  - Number of travelers
  - Personal interests
  - Add additional interests
- Detailed day-by-day itinerary with:
  - Main activities and alternatives
  - Time suggestions
  - Location details
  - Activity descriptions

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express
- AI Integration: Google Gemini API
- Styling: Tailwind CSS

## Future Scope

- If the API key of gemini is used of free version, it cannot plan for more than 30 days

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/meeheer123/travel-iternary
   cd travel-iternary
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Fill in the travel details form with your preferences:
   - Destination
   - Start and end dates
   - Budget
   - Number of travelers
   - Interests (you can also add interests as per your wish)

2. Click "Generate Itinerary"

3. View your personalized itinerary

4. Explore daily activities, including main and alternative options

## Creative Enhancements

- Interactive modal for itinerary display, improving user experience
- Integration of visual elements with activity images
- Alternative activities for each day, providing flexibility
