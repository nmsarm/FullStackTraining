# React Application Assignment: Rick and Morty

## Project Overview
This project is a React application that displays information about characters from the "Rick and Morty" TV show. The application fetches data from the Rick and Morty API.

## Features
- **Fetch Characters**: Retrieves a list of characters from the Rick and Morty API.
- **Character Details**: Displays detailed information about the character.
- **Search Functionality**: Allows users to search for characters by name.
- **Sort Functionality**: Sorts the characters by id in ascending or descending order.
- **Filters**: Allows users to filter characters based on their species, gender, and origin.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Project Structure
```
react-assignment/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterList.jsx
│   │   ├── Filters.jsx
│   │   └── ...
│   ├── redux/
│   │   ├── charactersSlice.js
│   │   ├── selectors.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── package.json
└── README.md
```

## How to Run
1. **Clone the repository**:
    ```bash
    git clone https://github.com/nmsarm/FullStackTraining.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd react-assignment
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm start
    ```
5. Open your browser and go to `http://localhost:3000` to view the application.


