# React Tic-Tac-Toe Game with Unit Testing

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Unit Testing](#unit-testing)
- [Screenshots](#screenshots)
- [License](#license)

## Overview

This project is an implementation of the classic game Tic-Tac-Toe using React. The project includes comprehensive unit tests using React Testing Library and Jest, also internationalization and a good looking "neon" layout with styled-components.

## Technologies Used

- React
- Redux
- TypeScript
- Atomic Design (Folder Structure)
- i18n (Internationalization)
- Styled Components (Styling)
- React Testing Library
- Jest

## Project Structure

The project follows the Atomic Design folder structure, organizing components into:

- **atoms**: Low-level components such as buttons and form fields.
- **molecules**: Components that combine multiple atoms, like a login form.
- **organisms**: Components composed of multiple molecules, such as the game board.
- **templates**: General layouts for pages, like the game page.
- **pages**: Specific application pages, e.g., the login and game pages.

### Note: You can also try the live version of the game at https://tic-tac-toe-matmelous.vercel.app/.

## Installation

To run the project locally, follow these steps:

### 1. Clone this repository:

```git clone https://github.com/matmelous/tictactoe.git```

## 2. Available Scripts

In the project directory, you can run:

```yarn start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```yarn test```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```yarn test:coverage```

Launches the test runner in the interactive watch mode and fill the coverage documentation.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```yarn run build```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```yarn run eject```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Screenshots
![image](https://github.com/matmelous/tictactoe/assets/51704551/7b6787f4-67f3-4ae7-a5ea-c1153a7708e9)

![image](https://github.com/matmelous/tictactoe/assets/51704551/fd0c65cf-cd16-4513-bab8-01972e8f1247)

![image](https://github.com/matmelous/tictactoe/assets/51704551/ac7fd145-1b0a-4a42-9d47-13cdcb8fd3c4)


## License
This project is licensed under the MIT License.


