# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
  A functional component is meant to handle a task or display UI, whereas a stateful component is meant to render data onto the screen.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
  componentWillMount is called the first time that component is rendered. componentWillUpdate will re-render based on the specified parameters.

3. Define stateful logic.
  Stateful logic means anything that is holding or using state: useState, setState, functions utilizing said hooks, as well as custom hooks.

4. What are the three step of creating a successful test? What is done in each phase?
  1. Arrange: Rendering the componnent - essentially the base for testing the component is positioning it for testing
  2. Act: Setting consts and placing userEvents
  3. Assert: Expect messages placed to check that specific elements have rendered
