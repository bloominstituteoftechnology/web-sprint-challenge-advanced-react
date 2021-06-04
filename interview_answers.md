# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components contain constuctor  function and a super with a this.state to render UI and  return jsx. It allows frequent internal communication inside a component that are interactive and reusable.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
A componentWill mount will invoked immediately before mounting occurs. It is also called before render() .

3. Define stateful logic.

Logic that reuses handles events or state inside a compoenent.


4. What are the three step of creating a successful test? What is done in each phase?

Arrange

Arrange is a method that renders an element into the DOM.

Act is a method to query the Dom. It is commonly  used to search for visial references in the browser for intergrating test.

Assert  


Assert is a final method that renders the tested element.