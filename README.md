# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied **class components**, **the component lifecycle** and **class component lifecycle methods,** **custom hooks**, and **React Testing Library 🐙.**

In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from an internal server using a `class component`, displaying that data, using a `custom hook`, and `writing tests for your app.`

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

_Sprint challenges open at Midnight PST on Thursday and close at 5pm PST on Friday. You will receive feedback on what you have finished and submitted by 5pm when the submissions will be closed. No retakes will be accepted._

## Introduction

In this project, you will add class components to your a basic ecommerce site that allow you to request product data from a server and render that data. You will also implement the ablitity to add products to a shopping cart.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

## Instructions

### Task 1: Project Setup

#### Repo Setup

- [x] Fork and clone this repository.
- [x] Create a new working branch: git checkout -b `<firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.
- [x] **RUN** `npm install` to install your dependencies.
- [x] **RUN** `npm start` to start your application.

* [x] In another terminal window, **RUN** `npm test` to start your test runner. (It is recommended you do this only when actually building tests - any change in your app will make the tests run, and that could eat up your computer power)

### Task 2: CodeGrade Setup

- [x] Open the assignment in Canvas and following along with the attached document [here.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374).
- [x] Follow instructions to set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>`.
- [x] Push your first commit: `git commit --allow-empty -m "first commit" && git push`
- [x] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements

Your finished project must include all of the following requirements.

#### Plant list

Display a list of the plants from the server. This should be done in the class component `PlantList`. **Unlike other projects, the local server used here can not be accessed through the browser. It is started automatically and without the need for starting a server.js file. Feel free to ignore any messages related to MSW or mock service workers. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.**

- [x] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants.`
- [x] Set the data to a state property called `this.state.plants.`
- [x] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart.

#### Shopping Cart

Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

- [x] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic.
- [x] You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And _do not_ copy/paste directly from the guided project!\_

#### Testing the Checkout Form

- [ ] Run the test runner and ensure that `src/components/CheckoutForm.test.js` is correctly called.
- [ ] Fill out code necessary to test that that Checkout form renders without errors.
- [ ] Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.
- [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working.

**Notes:**

- Again, unlike other projects, the local server used here can not be accessed through the browser. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 4: Stretch Goals

**IMPORTANT:** Only work on stretch goals after completing your MVP!

When completing these goals, make sure to use a **new branch** to ensure your MVP code is not overwritten. You can branch off `main` by executing `git checkout -b stretch`. When you are fully sure your stretch code is ready for feedback, merge your stretch code with main using `git checkout main` and `git merge stretch.`

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add a filter input to the plant list page.
- [ ] Build and implement another custom hook - a dark mode hook would be great for this project, though you'll have to style the light theme 🌙
- [ ] Add a test file for the `ShoppingCart` component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call `render` and render the component - see the example below)

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

### Reference Materials

#### API Documentation

- **[GET]** \* to `http://localhost:3333/plants`: returns an array of objects of the following form

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

- [ ] Submit via Codegrade by commiting and pushing any new changes.
- [ ] Submit a pull-request to merge <firstName-lastName> branch into main. **Please don't merge your own pull request and make sure you are on your own repo**
- [ ] Check codegrade for automated feedback.
- [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
- [ ] Any changes pushed to your <firstName-lastName> branch will resubmited to codegrade if pushed before the sprint challenge deadline. Changes after the deadline will not be reviewed.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

2. When does a componentWillMount function be called? What about a componentWillUpdate?

3. Define stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?
