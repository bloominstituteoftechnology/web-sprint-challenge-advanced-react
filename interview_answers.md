# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. What are the main differences between a stateful and a functional component?

One has a state and one does not. stateful components are keeping track of the changing data and functional components simply print out what is given to them via props.


2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount will invoke immediately before mounting occurs and it is called before render.

componentWillUpdate is called everytime re-rendering is required especially when setting state.

3. Define stateful logic.

is a code that uses state.


4. What are the three step of creating a successful test? What is done in each phase?
Arrange : Setup the react compoment we are testing
Act : Execute our behavior
Assert : Extract the response element and check ithat is it what we expected it to be.