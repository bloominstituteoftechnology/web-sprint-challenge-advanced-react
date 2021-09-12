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

### Task 1: Transfer Repo
* Clone this repository.
* Implement the project on the automatically generated <firstName-lastName> branch, committing changes regularly.
* Push commits: git push origin <firstName-lastName>.
* RUN npm install to install your dependencies.
* RUN npm start to start your application.
 
### Task 2: Project Requirements
 Your finished project must include all of the following requirements.

#### Plant list

  Display a list of the plants from the server. This should be done in the class component `PlantList`. **Unlike other projects, the local server used here can not be accessed through the browser. It is started automatically and without the need for starting a server.js file. Feel free to ignore any messages related to MSW or mock service workers. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.**

* [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants.`
* [ ] Set the data to a state property called `this.state.plants.`
* [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart.

#### Shopping Cart

  Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

  The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

* [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic.
* [ ] You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

#### Testing the Checkout Form
* [ ] Run the test runner and ensure that `src/components/CheckoutForm.test.js` is correctly called.
* [ ] Fill out code necessary to test that that Checkout form renders without errors.
* [ ] Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.
* [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working.

**Notes:**
* Again, unlike other projects, the local server used here can not be accessed through the browser. For this and the rest of your sprint challenges, test the functioning of the server directly through your axios calls.
* Note that a test file `codegrade.test.js` is include with some simple, baseline tests for your submission. Please make sure they pass before considering your project complete.
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not alter your `package.json` file except to install extra libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.`

### Reference Materials

#### API Documentation
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

* [ ] Submit via Codegrade by commiting and pushing any new changes.
* [ ] Check codegrade for automated feedback.
* [ ] Check codegrade on Monday following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
* [ ] Any changes pushed to your <firstName-lastName> branch will resubmited to codegrade if pushed before the sprint challenge deadline. Changes after the deadline will not be reviewed.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function. FC are also known as Stateless components, as they simply accept data and display them in some form, that they are mainly responsible for rendering UI. For functional components, we use hooks (useState) to manage state inside the existing function. Hooks can only be used in functional components, not in-class components. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. There is no render method used in functional components.


A class component requires you to  have the render() method returning HTML. CC are also known as Stateful components because they implement logic and state. 
By creating components as classes, you can set up a data object that your component is concerned with. This is done using state and setting up that object on our constructor method. Once we have some data that we can render out to the DOM, we need a vehicle that will allow us to render that data. This is achieved with the JSX method render() from within the life-cycle hook. 
React lifecycle methods can be used inside class components (for example, componentDidMount).


2. When does a componentWillMount function be called? What about a componentWillUpdate?

React is, in essence, a combination of multiple components. A component can be as simple as a single piece of user interface that represents a small portion of our application. Conceptually, a component lifecycle happens in three phases. 

1) Birth/Mounting: This is the phase when the component is being built. The initial data you want access to will be defined on the constructor of this phase. The render method is invoked and the componentDidMount gets called as well.

2) Growth/Updating: In the Growth/Updating phase you're updating compnent data. setState can be used to change the component's state data, forcing a call to render. The shouldComponentUpdate method is used to stop a component from calling render if necessary.

3) Death/Unmounting: The unmounting phase includes removing the component from the screen. The componentWillUnmount hook is called and can be used for any clean up.

The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server. It triggers before the initial render, and the function will only trigger once in the lifespan of a component. It is used to update the state value before the DOM is rendered, creating a state variable. 

Once we have determined that we do need to re-render in our Update phase, the componentWillUpdate() will be called. Just like componentWillMount(), this method is called before render(). The componentWillUpdate() is a chance for us to handle configuration changes and prepare for the next render. If we want to access the old props or state, we can call this.props or this.state. We can then compare them to the new values and make changes/calculations as required.
Unlike componentWillMount(), we should not call this.setState() when using componentWillUpdate() . The reason we do not call this.setState() is that the method triggers another componentWillUpdate(). If we trigger a state change in componentWillUpdate() we will end up in an infinite loop . Some of the more common uses for componentWillUpdate() is to set a variable based on state changes (not using this.setState()), dispatching events or starting animations.

3. Define stateful logic.

Stateful logic is logic that is built into a component. It can be a function that handles a click event. Usually, this kind of logic deals with state in the component. Thus the moniker "stateful logic."
Custom Hooks, are so-called because you are building the hook yourself (customizing it), to apply non-visual behavior and stateful logic throughout your components.This way, you can reuse the same hook over and over again. Custom hooks follow the same patterns of naming that you've already learned (i.e. prefacing the function name with use, as in useState). 


4. What are the three step of creating a successful test? What is done in each phase?

"Arrange, Act, Assert"  is a testing structure.

- Arrange: This section of a unit test method initializes objects and sets the value of the data that is passed to the method under test.

- Act: This section invokes the method under test with the arranged parameters. 

- Assert: The Assert section verifies that the action of the method under test behaves as expected. This is where the actual testing occurs. 

// https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d

// https://docs.microsoft.com/en-us/visualstudio/test/unit-test-basics?view=vs-2019