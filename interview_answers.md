# Interview Answers

### 1. What are the main differences between a stateful and a functional component?

- The difference between a stateful and nonState or functional component is that a stateless (functional component) does not maintain a remembered state value. It simple renders and is done. A stateful component remembers the value of a component and adjusts it to a new value as it's state is changed

### 2. When does a componentWillMount function be called? What about a componentWillUpdate?

- A componentWillMount is called after the constructor function call including super and initial state value.

- componentDidMount is called after the component is mounted on the screen

### 3. Define stateful logic.

- Stateful Logic - is any code that used state to store and update the current state of being with differing values or states.

### 4. What are the three step of creating a successful test? What is done in each phase?

- Arrange - The stage where inputs and targets are set. Arrange sets set up the test cases

- Act - Act on the behavior of the target

- Assert - What are your expected outcomes. this is even defined by expect in the test code syntax.
