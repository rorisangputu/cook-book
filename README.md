# Taste Book

Taste Book is a comprehensive recipe management application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to explore, create, and share recipes, follow other culinary enthusiasts, and discover new dishes by name, ingredient, cuisine, and category.

## Features

- **Search Recipes**: Find recipes by name, ingredient, cuisine, and category.
- **Like and Follow**: Like your favorite recipes and follow other users to stay updated with their latest creations.
- **User Profiles**: Create a profile to showcase your culinary skills and manage your recipes.
- **Detailed Recipe View**: View detailed information about each recipe, including ingredients, steps, and reviews.
- **Responsive Design**: Optimized for both desktop and mobile devices for a seamless experience.

## Tech Stack

- **Frontend**: React
- **Backend**: Express
- **Database**: MongoDB
- **Server**: Node.js

## Project Structure

```
Taste Book/
│
├── backend/                    # Express server and API routes
│   ├── controllers/            # Controller functions for routes
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API routes
│   └── server.js               # Server setup
│
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── pages/              # Application pages
│   │   ├── App.js              # Main app component
│   │   ├── index.js            # Entry point for React
│   │   └── styles/             # CSS and styling
│   └── public/                 # Public assets
│
├── .gitignore
├── README.md
├── package.json                # Project dependencies and scripts
└── yarn.lock                   # Yarn lock file
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/taste-book.git
   cd taste-book
   ```

2. **Install dependencies**:

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add the following:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**:

   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```

   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

   The application should now be running on `http://localhost:3000`.


## Contact

For any inquiries, please contact Rorisang Putu @ rorisangputu@gmail..com.
