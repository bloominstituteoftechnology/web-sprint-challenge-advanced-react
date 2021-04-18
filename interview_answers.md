# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
        A Functional Component can pass down the state between components, whereas a stateful (class) component holds the state right in it's component and cannot be passed down through props. 
2. When does a componentWillMount function be called? What about a componentWillUpdate?
        A componentWillMount function is called when the initial API call is taking place, executing that first rendering of data to the page. ComponentWillUpdate executes whenever a specified change occurs on the page.
3. Define stateful logic.
        Stateful logic is using state as a function, so that you can make your forms more reusable for future code.
4. What are the three step of creating a successful test? What is done in each phase?
    The three steps include: 1. Arrange: rendering the element & getting the form elements from the DOM
            2. Act: Filling out the form as a user would, checking that the form works as it should in all areas
            3. Assert: is saying what the outcome of each test should be, what we expect to happen.