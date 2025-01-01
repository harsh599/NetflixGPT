# NetflixGPT

**NetflixGPT** is a web application that combines Firebase authentication, The Movie Database (TMDb) API, and an in-house movie recommendation system powered by the ChatGPT API. Users can sign in using their email, browse trending, popular, and most-watched movies and TV shows, and receive personalized movie recommendations from ChatGPT.

The application is fully responsive, ensuring a smooth user experience across devices. The project is hosted on Firebase.

## Live Demo

Check out the live app here: [NetflixGPT](https://netflixgpt-b34aa.web.app)

## Features

- **User Authentication**: Sign up and sign in using Firebase Authentication with email and password.
- **Movie Listings**: Fetch and display movies from TMDb based on categories such as:
  - Popular
  - Trending
  - Most Watched
  - TV Shows
- **Movie Recommendation System**: Get personalized movie recommendations powered by the ChatGPT API.
- **Responsive Design**: Optimized for mobile and desktop views.
- **Firebase Hosting**: The app is deployed and hosted on Firebase for easy access and management.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Firebase Authentication
- **API**: The Movie Database (TMDb) API
- **Recommendation System**: OpenAI's ChatGPT API
- **Hosting**: Firebase Hosting

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/netflixgpt.git
```

### 2. Navigate to the project directory

```bash
cd netflixgpt
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up Firebase

Make sure to set up Firebase in your project:

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable Firebase Authentication with email/password in the Firebase console.
- Create a `.env` file in the root directory and add your Firebase config:

```bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

### 5. Set up TMDb API

Create an account on [TMDb](https://www.themoviedb.org/) and get an API key. Add this to your `.env` file:

```bash
REACT_APP_TMDB_API_KEY=your-tmdb-api-key
```

### 6. Set up ChatGPT API

To integrate ChatGPT for movie recommendations, obtain an API key from OpenAI. Add this to your `.env` file:

```bash
REACT_APP_OPEN_AI_KEY=your-openai-api-key
```

### 7. Run the app

Once everything is set up, you can run the app locally:

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

## How it Works

1. **User Authentication**: Firebase Authentication handles user sign-up, login, and sign-out. Upon successful authentication, users can access movie lists and personalized recommendations.
2. **Movie Lists**: The app uses the TMDb API to fetch movie data based on categories like popularity, trending, and most-watched.
3. **Movie Recommendations**: When users request recommendations, the app sends a prompt to the ChatGPT API, which returns personalized movie suggestions based on the user's preferences.
4. **Responsive Design**: The app is built with a responsive design using TailwindCSS to ensure it looks great on all screen sizes.

## Future Improvements

- Enhance the movie recommendation system with more advanced filters.
- Add more authentication options (e.g., Google login).
- Implement user-specific movie watchlists.

## License

This project is open-source and available under the [MIT License](LICENSE).

