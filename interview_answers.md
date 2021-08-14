# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
a stateful component is initialized in a constructor and can only be changed by setState.
a functional component is a stateless component and doesn't play with any lifeCycle methods of React.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount gets called right before a component mounts or the render method is called.
componentWillUpdate is called before the render function and it is a better option to decide what activity inside this function is more needed then call to render.

3. Define stateful logic.
Stateful logic is code that uses state, but in the case of hooks it can be defined as a behaviour created with the use of one or more hooks.

4. What are the three steps of creating a successful test? What is done in each phase?
Arrange = your app is in the original state
Act = something happens (click event, input etc.)
Assert = make a hypothesis of the new state of your app. tests will pass if the hypothesis is correct and fail if it is wrong.
