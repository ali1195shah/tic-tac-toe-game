import Game from './components/Game';

function App() {
  return (
    <Game />
  );
}

export default App;


// You should read these instructions before starting
// Please take a few moments to get familiar with the IDE and with the main functionalities such as running the code, previewing the application, checking the logs, and restarting the application after you install a new NPM library. You can access the logs via the Tasks section available in the right side bar (second item). If you want to preview the application then access the Endpoints section from the right side bar (first item).
// Build an interactive Tic-Tac-Toe game with React.
// The board should contain 9 clickable elements in a 3x3 grid. Each element should have a class called square and could take one of the following values(X or O) when is clicked.

// The game status should be inside a div element with class status.

// The game status text could be one of the following: Next player: X, Next player: O, Winner: X, Winner: O, Tie.

// There should be a reset button which resets all cell values. The button should have a class reset.

// When the game starts the status should be Next player: X and after one of the cell is clicked the status will change into: Next player: O and so on.

// The game winner is decided when the first player scores 3 marks in a row(up, down or diagonally).

// If no player scores 3 marks in a row the game ends in a tie.

// We are testing if the App is working based on what classes are added on the elements. Make sure you are creating the elements using only the classes mentioned above.

// More about tic-tac-toe game you can find here: https://en.wikipedia.org/wiki/Tic-tac-toe