# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from an internal server using a `class component`, displaying that data, using a `custom hook`, and `writing tests for your app.`

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup
* [x] Run npm install to install your dependencies.
* [x] Run npm start to run your frontend and backend code automatically.
* [x] Note your backend code will run automatically when your run npm start. There is no need to separately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions

In this project, you will add class components to your a basic ecommerce site that allow you to request product data from a server and render that data. You will also implement the ablitity to add products to a shopping cart.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

## Project Requirements

### Complete the Plant list Component

  Display a list of the plants from the server. This should be done in the class component `PlantList`.

* [x] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants.`
* [x] Set the data to a state property called `this.state.plants.`
* [x] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart.

### Complete the Checkout Form Component

  The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

* [x] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic.
* [x] You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

### Test the Checkout Form
* [x] Run the test runner and ensure that `src/components/CheckoutForm.test.js` is correctly called.
* [x] Fill out code necessary to test that that Checkout form renders without errors.
* [x] Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.
* [x] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working.

## Important Notes
* Again, unlike other projects, the local server used here can not be accessed through the browser. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.
* Note that a test file `codegrade.test.js` is include with some simple, baseline tests for your submission. Please make sure they pass before considering your project complete.
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not alter your `package.json` file except to install extra libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.


## API Documentation
* **[GET]** * to `http://localhost:3333/plants`: returns an array of objects of the following form
```js
{
    name: "Peperomia Rosso",
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    sizes: ["small"],
    watering: 2,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21,
  }
```

## Submission format

* [x] Submit via Codegrade by committing and pushing any new changes to **your main branch.**
* [x] Check Codegrade before the deadline to compare its results against your local tests.
* [x] Check Codegrade on the days following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
* [x] New commits will be evaluated by Codegrade if pushed before the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
  Stateful components are mutable and update content without a page refresh; whereas functional components require state hooks to manage state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
  ComponentWillMount is called during the birth/mounting phase. ComponentWillUpdate is run during the growth/updating phase.

3. Define stateful logic.
  Stateful logic allows changes of state to flow into other components through props drilling and a parent/child relationship to allow for shared, persistent data.

4. What are the three step of creating a successful test? What is done in each phase?
  · Create project - project is created with all files and dependencies necessary
  · Create test file - Test file is created and tests implemented
  · Run tests - tests are run to see which are passing or failing
# Sprint Challenge: Advanced React

## Intro

In this challenge, you will write the logic for [THIS WIDGET](https://adv-react-sc9.netlify.app/).

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
