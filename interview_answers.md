# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
stateful componponents keep track of changing data, functional components always render the same thing

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount gets called after the render method
componentWillUpdate gets called if there are any changes in props or state

3. Define stateful logic.
Any code that uses state

4. What are the three step of creating a successful test? What is done in each phase?
Arrange- render the component you need for the test and assign values to specific elements on the screen
Act- do something, push buttons, type in inputs... 
Assert- look for what we did on the screen to make sure it does what it was supposed to
