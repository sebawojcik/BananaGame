# Tomato Game

A simple web app where users can play the Tomato Game. Users are presented with a tomato-related question and need to input the correct answer. The app fetches questions from an external API.

## How to Play

1. Open `index.html` in a web browser.

2. The game will start automatically, presenting you with a tomato-related question.

3. Input your answer in the provided text field.

4. Click the "Submit Answer" button.

5. The app will display whether your answer is correct or not.

6. Click the "Start New Game" button to get a new question and start over.

## Technologies Used

- HTML
- JavaScript

## Project Structure

- `index.html`: Main HTML file containing the structure of the web page.
- `app.js`: JavaScript file handling game logic and API interactions.

## API Information

The app fetches questions from the following API:
- API URL: [https://marcconrad.com/uob/tomato/api.php](https://marcconrad.com/uob/tomato/api.php)
- Response Format: JSON
- Example Response:
  ```json
  {
    "question": "https://www.sanfoh.com/uob/tomato/data/t08ffc98a36438a8a0217a3b5c0n174.png",
    "solution": 4
  }
