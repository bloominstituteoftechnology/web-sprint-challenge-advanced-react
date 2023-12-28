# Sprint Challenge: Advanced React

## Intro

In this challenge, you will write the logic for [THIS WIDGET](https://advanced-react-grid.herokuapp.com/).

Study its functionality and also inspect the Console, the Network tab and the Elements tab **in Chrome Dev Tools**:

- There are two versions of the widget with identical functionality: class-based and functional.
- The input box at the bottom of the page expects a valid email address.
- Email validation errors arrive from the server, as you can see in the Network tab, under "Preview".
- The payload sent to the server on form submit can also be seen in the Network tab, under "Payload".
- One valid email in particular, `foo@bar.baz`, **results in a "Forbidden" server error**❗
- The origin of coordinates of the grid is on its top-left corner.

## Requirements

### Tools

- Node >= 18.x
- NPM >= 9.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)
- Chrome >= 100.x

❗ Other configurations might work but haven't been tested.

## Project Setup

- Fork, clone, and `npm install`. You won't need to add any extra libraries.
- Launch the project on a development server executing `npm run dev`.
- Visit your widget by navigating Chrome to `http://localhost:3000`.
- Run tests locally executing `npm test`. The test files are `codegrade_mvp.test.js` and `App.test.js`.

## API

- The application includes an endpoint reachable at `POST http://localhost:9000/api/result`.
- You can experiment with this endpoint using an HTTP client like Postman.
- The endpoint expects a payload like `{ "x": 1, "y": 2, "steps": 3, "email": "lady@gaga.com" }`:
  - `x` should be an integer between 1 and 3.
  - `y` should be an integer between 1 and 3.
  - `steps` should be an integer larger than 0.
  - `email` should be a valid email address.
- Expect an "Unprocessable Entity" server response if the payload has the wrong shape.

## MVP

### MVP 1, The Grid

- Replicate the **functionality and DOM** shown in the prototype linked at the top of this README.
- Keep your code inside `frontend/components/AppFunctional.js`.
- The component exposed by `AppFunctional.js` must be a stateful functional component.
- The component in `AppClass.js` **is optional** but can be tackled if desired. It's not required to pass the sprint.
- The DOM produced by `AppFunctional` must match exactly the DOM in the prototype:
  - The hierarchy of HTML elements, their ids, class names etc must be the same.
  - The current square is marked with a capital B and an "active" class name.
  - The submit success and error messages that display on the page come from the API (see Network tab).
  - No frontend form validation code is required.
- The coordinates of each square of the grid are as follows:

  ```js
    (1, 1) (2, 1) (3, 1)
    (1, 2) (2, 2) (3, 2)
    (1, 3) (2, 3) (3, 3)
  ```

❗ ALL TESTS MUST PASS

### MVP 2, Testing

- Using `codegrade_mvp.test.js` as inspiration, write 5 tests inside `frontend/components/App.test.js`:
  - From inside the test file, import `AppFunctional.js`.
  - Test that the visible texts in headings, buttons, links... render on the screen.
  - Test that typing on the input results in its value changing to the entered text.

### Regarding Grids and Other Notes

- Inside `AppClass.js` and `AppFunctional` you will find some suggested states and helper functions. Feel free not to use them.
- You don't need a complicated structure to track the state of the grid, because we aren't storing any information in the cells.
- Imagine that the grid were simply a one-dimension array broken --only visually-- into three rows.
- The only component state you need in order to drive the grid is an integer from 0 to 8: **the index the "B" is at.**
- Other pieces of information, like coordinates, can be derived from that index, and don't need a state of their own.
- If you want to make life more complicated (or interesting) for yourself, other structures can be used to store the state of the grid:

  ```js
  // A plain array can be used to represent a grid.
  // But our App component needn't track the whole array, only the index where the "B" is.
  [null, null, null, null, "B", null, null, null, null]

  // 2D arrays or matrices can be used to represent a grid, but this is not recommended in this project:
  [[null, null, null], [null, "B", null], [null, null, null]]

  // A string also could work, but strings in JS are immutable making this approach inconvenient:
  "xxxxBxxxx"
  ```

- "Product" works hard designing the messages: we must reproduce them faithfully, down to the last comma.
- ❗ Remember only the functional version is required; the class-based one is recommended but optional.
