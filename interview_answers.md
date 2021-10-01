# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

The main difference between a stateful and a funcitonal component is that one has state and the other one doesn't. The stateful components are keeping track of data, while stateless functional components print out waht is given to them via props. Functional components are written as functions.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

ComponentWillMount function runs before initial rendering. ComponentWillUpdate runs right before the component is updated or right before state or props are passed to the component changes.

3. Define stateful logic.

Stateful logic is any code that deals with creation or manipulation of data.

4. What are the three step of creating a successful test? What is done in each phase?
   The three steps of creating a successful test are:

1 Arrange - This is where we setup the react component that we're testing.

2 Act - In this step we execute our behaviour (if there is one)

3 Assert - Here we extract the response element and check (if neccessary) that is what we expect it to be.
