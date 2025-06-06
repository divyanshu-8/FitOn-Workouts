# Gym Exercises App Documentation
## Project Overview
This project is a React-based web application designed to help users find and learn about various exercises. It allows users to search for exercises by body part, target muscle, or equipment. The application also provides access to YouTube videos demonstrating how to perform each exercise.
**Key Features:**
*   **Exercise Search:** Users can search for exercises based on keywords, body part, target muscle, or equipment.
*   **Exercise Details:** Displays detailed information about each exercise, including target muscle, equipment used, and a GIF demonstrating the exercise.
*   **Exercise Videos:** Provides a list of YouTube videos demonstrating how to perform the exercise.
*   **Similar Exercises:** Suggests similar exercises based on target muscle and equipment.
*   **Body Part Selection:** Allows users to filter exercises by body part.
**Supported Platforms/Requirements:**
*   Modern web browsers (Chrome, Firefox, Safari, Edge)
*   React 17 or higher
*   Node.js and npm (Node Package Manager) for development
## Getting Started
### Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
    
2.  **Navigate to the project directory:**
    ```bash
    cd gym_exercises
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
### Prerequisites
*   **Node.js and npm:** Ensure Node.js and npm are installed on your system. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
*   **RapidAPI Key:** This project uses the ExerciseDB and YouTube Search and Download APIs, both hosted on RapidAPI. You will need to obtain API keys from RapidAPI and store them in a `.env` file.
    *   Create a `.env` file in the `src/` directory.
    *   Add the following line to the `.env` file, replacing `<YOUR_RAPID_API_KEY>` with your actual RapidAPI key:
                React_APP_RAPID_API_KEY = <YOUR_RAPID_API_KEY>
        ```
        
### Running the Application
1.  **Start the development server:**
    ```bash
    npm start
    ```
2.  **Open the application in your browser:**
    The application will be available at `http://localhost:3000`.
## API Documentation
The application uses the following external APIs:
*   **ExerciseDB API:** Provides data about exercises, including names, descriptions, target muscles, and equipment.
    *   **Base URL:** `https://exercisedb.p.rapidapi.com`
    *   **Endpoints:**
        *   `GET /exercises`: Retrieves a list of all exercises.
        *   `GET /exercises/exercise/{id}`: Retrieves details for a specific exercise by ID.
        *   `GET /exercises/bodyPartList`: Retrieves a list of all body parts.
        *   `GET /exercises/bodyPart/{bodyPart}`: Retrieves exercises for a specific body part.
        *   `GET /exercises/target/{target}`: Retrieves exercises for a specific target muscle.
        *   `GET /exercises/equipment/{equipment}`: Retrieves exercises for a specific equipment.
*   **YouTube Search and Download API:** Provides a way to search for YouTube videos.
    *   **Base URL:** `https://youtube-search-and-download.p.rapidapi.com`
    *   **Endpoint:**
        *   `GET /search?query={query}`: Searches for YouTube videos based on a query.
**Example API Request (ExerciseDB):**
GET https://exercisedb.p.rapidapi.com/exercises/exercise/3288
```
**Example API Response (ExerciseDB):**
```json
{
  "bodyPart": "waist",
  "equipment": "body weight",
  "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3288.gif",
  "id": "3288",
  "name": "air bike",
  "target": "abs"
}
```
**Example API Request (YouTube Search):**
GET https://youtube-search-and-download.p.rapidapi.com/search?query=air%20bike%20exercise
```
**Example API Response (YouTube Search):**
```json
{
  "contents": [
    {
      "video": {
        "videoId": "Hn1hcJpZR7M",
        "title": "Air Bike Exercise - How to Do It Properly",
        "channelName": "Fit Simplify",
        "thumbnails": [
          {
            "url": "https://i.ytimg.com/vi/Hn1hcJpZR7M/hqdefault.jpg"
          }
        ]
      }
    }
  ]
}
```

