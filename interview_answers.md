# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Class: based for heavy components, handle component “lifecycle” in a special way
Functional: for light components

2. When does a componentWillMount function be called? What about a componentWillUpdate?

- Mounting: Birth phase

* Constructor function is called and state data is initialized
  - If you don’t initialize state you don’t bind methods, you don’t need to implement a constructor for your React component
* We can receive props and place them on our component as state
* Render is then invoked and our JSX elements are transformed into Dom elements
* After render is called, componentDidMount will be invoked

- Updating: Growth phase

* Any new props received from a parent, will trigger updates to the child
* this.setState (not directly part of the lifecycle but influences it) any changes to our state need to go through setState
* setState calls a render by default
* componentDidUpdate()
  - is invoked immediately after updating occurs. This method is not called for the initial render.

3. Define stateful logic.

- Stateful logic:

* this is logic that is built into a component it can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed usually this kind of logic deals with state in the component does the mocker stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?

- 3 steps to running a test

1. Arrange: render the App component.
2. Act: query the DOOM for the header element.
3. Assert: is the header found on the DOM.
