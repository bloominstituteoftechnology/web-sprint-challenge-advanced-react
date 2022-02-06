# Sprint Challenge: Advanced React

## Intro

In this challenge, you will write the logic for [THIS WIDGET](https://advanced-react-grid.herokuapp.com/).

Study its functionality and also inspect the Console, the Network tab and the Elements tab **in Chrome Dev Tools**:

- There are two versions of the widget, with identical functionality.
- The input box at the bottom of the page expects a valid email address.
- Email validation errors arrive from the server, as you can see in the Network tab, under "Preview".
- The payload sent to the server on form submit can also be seen in the Network tab, under "Payload".
- The origin of coordinates of the grid is on its top-left corner.
- One valid email in particular, `foo@bar.baz`, **results in a "Forbidden" server error**.

## Requirements

### Tools

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Chrome >= 96.x

Other configurations might work but haven't been tested.

### Optional Tools

- Postman (download [here](https://www.postman.com/downloads/))

## Project Setup

- Fork, clone, and `npm install`. You won't need to add any extra libraries.
- Launch the project on a development server executing `npm run dev`.
- Visit your widget by navigating to `http://localhost:3000` with Chrome.
- Run tests locally executing `npm test`. The test file is `codegrade_mvp.test.js`.

## API

- The application includes an endpoint reachable at `POST http://localhost:9000/api/result`.
- You can experiment with this endpoint using an HTTP client like Postman.
- The endpoint expects a payload like `{ "x": 1, "y": 2, "steps": 3, "email": "lady@gaga.com" }`:
  - `x` is an integer between 1 and 3.
  - `y` is an integer between 1 and 3.
  - `steps` is an integer larger than 0.
  - `email` is a valid email address.

## MVP

### MVP 1, The Grid - Long Explanation

- Replicate the **functionality and DOM** shown in the prototype linked at the top of this README.
- Keep your code inside `frontend/components/AppFunctional.js` and `frontend/components/AppClass.js`.
- The component exposed by `AppFunctional.js` must be a stateful functional component.
- The one in `AppClass.js` must be a stateful class-based component.
- The DOM produced by your components must match exactly the DOM in the prototype:
  - The hierarchy of HTML elements, their ids, class names etc must be the same.
  - The current square is marked with a capital B and an "active" class name.
  - Submit success and error messages are those returned by the API (see Network tab, "Preview" area).
  - No frontend form validation code is required.
- The coordinates of each square of the grid are as follows:

  ```
    (1, 1) (2, 1) (3, 1)
    (1, 2) (2, 2) (3, 2)
    (1, 3) (2, 3) (3, 3)
  ```

### MVP 1, The Grid - Short Explanation

- Make **ALL** the tests pass!

### MVP 2, Testing

- Using `codegrade_mvp.test.js` as inspiration, write a few tests inside `frontend/components/App.test.js`:
  - From inside the test file, import a component of your choosing, either `AppClass.js` or `AppFunctional.js`.
  - Test that emails over 100 characters long result in a particular server error on the screen.
  - Inspect the API with Postman to see what this error actually is.

### Stretch Goals

- Extract some of the stateful logic into a custom hook at the top of `AppFunctional.js`.
- Build a stateless component responsible for rendering the markup in the stateful components, so it does not have to be repeated.
- Do not break your MVP by pushing broken stretch goals. You must keep your tests passing at 100%.

### Important Notes

- Design the state of the app before opening your editor. You might need fewer pieces of state than you think!
- Find the simplest data structure that describes effectively the state of the grid.
- "Product" works hard designing the messages: we must reproduce them faithfully, down to the last comma.
- If you start with Functional, don't switch to Class-Based until Functional is passing all its tests (and vice versa).
- If the direction of the `y` axis surprises you, know that elements in HTML also have their origin of coordinates on their top-left corner.
