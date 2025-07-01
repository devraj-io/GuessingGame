# React Native Guessing Game

A simple and interactive guessing game built with React Native. The app lets the user pick a number, and the app tries to guess it based on your feedback ("Lower" or "Higher"). The game features a clean UI, custom buttons, and a game over screen.

## Features

- **Start Game Screen:** User enters a number for the app to guess.
- **Guess Screen:** The app makes a guess, and the user tells it if the guess is too high or too low.
- **Game Over Screen:** Shows when the app has guessed the correct number, with an option to restart.
- **Reusable Components:** Custom PrimaryButton and ScreenTitle components for a consistent look.
- **Responsive Design:** Looks good on both Android and iOS devices.

## Screenshots

_Add your screenshots here!_

## Getting Started

### Prerequisites

- Node.js and npm installed
- Expo CLI (recommended):  
  ```
  npm install -g expo-cli
  ```

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   or, if using Expo:
   ```
   expo start
   ```

4. Run the app on your device or emulator using the Expo Go app or your preferred method.

## Project Structure

```
/components
  PrimaryButton.js
  ScreenTitle.js
/screens
  StartGameScreen.js
  GuessScreen.js
  GameOverScreen.js
App.js
```

## How to Play

1. Enter a number between 1 and 99 on the Start Game screen.
2. The app will try to guess your number.
3. Use the "Lower" or "Higher" buttons to guide the app.
4. When the app guesses correctly, press "Correct!" to end the game.
5. Restart the game from the Game Over screen.

## Customization

- You can easily add more features, such as tracking the number of guesses, adding animations, or customizing the UI further.

## License

This project is open source and free to use.

---

Enjoy playing and customizing your
