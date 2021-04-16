# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

The difference between a stateful and nonState or functional component is that a stateless (functional component) does not maintain a remembered state value. It simple renders and is done. A stateful component remembers the value of a component and adjusts it to a new value as it's state is changed

2. When does a componentWillMount function be called? What about a componentWillUpdate?

a componentWillMount is called after the constructor function call including super and initial state value. 

a componentDidMount is called after the component is mounted on the screen

3. Define stateful logic. 

Stateful Logic - is any code that used state to store and update the current state of being with differing values or states. 

4. What are the three step of creating a successful test? What is done in each phase?

1. Arrange - The stage where inputs and targets are set. Arrange sets set up the test cases

2. Act - Act on the behavior of the target

3. Assert - What are your expected outcomes. this is even defined by expect in the test code syntax.
