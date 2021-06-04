# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Components are self-sustaining, independent micro-entities that describe a part of your UI. An application's UI can be split up into smaller components where each component has its own code, structure, and API.

Components are also reusable. If you need the same component in multiple places, that's easy. With the help of JSX syntax, you can declare your components wherever you want them to appear, and that's it.

<div>
    Current count: {this.state.count}
    <hr />
    {/* Component reusability in action. */ }
    <Button sign = "+" count={this.state.count} 
        updateCount = {this.handleCount.bind(this) }/>
    <Button sign = "-" count={this.state.count}  
        updateCount = {this.handleCount.bind(this) }/>
</div>
Props and State
Components need data to work with. There are two different ways that you can combine components and data: either as props or state. props and state determine what a component renders and how it behaves. Let's start with props.

props
If components were plain JavaScript functions, then props would be the function input. Going by that analogy, a component accepts an input (what we call props), processes it, and then renders some JSX code.

Stateful vs Stateless Component Component with props
Although the data in props is accessible to a component, React philosophy is that props should be immutable and top-down. What this means is that a parent component can pass on whatever data it wants to its children as props, but the child component cannot modify its props. So, if you try to edit the props as I did below, you will get the "Cannot assign to read-only" TypeError.

```jsx
const Button = (props) => {
  // props are read only
  props.count = 21;
};
```

Advertisement
State
State, on the other hand, is an object that is owned by the component where it is declared. Its scope is limited to the current component. A component can initialize its state and update it whenever necessary. The state of the parent component usually ends up being props of the child component. When the state is passed out of the current scope, we refer to it as a prop.

Stateful vs Stateless Component Component with State

Now that we know the component basics, let's have a look at the basic classification of components.

Class Components vs. Functional Components
A React component can be of two types: either a class component or a functional component. The difference between the two is evident from their names.

Functional Components
Functional components are just JavaScript functions. They take in an optional input which, as I've mentioned earlier, is what we call props.

Stateful vs Stateless Components Functional Components

Some developers prefer to use the new ES6 arrow functions for defining components. Arrow functions are more compact and offer a concise syntax for writing function expressions. By using an arrow function, we can skip the use of two keywords, function and return, and a pair of curly brackets. With the new syntax, you can define a component in a single line like this.

const Hello = ({ name }) => (<div>Hello, {name}!</div>);
Class Components
Class components offer more features, and with more features comes more baggage. The primary reason to choose class components over functional components is that they can have state.

The state = {count: 1} syntax is part of the public class fields feature. More on this below.
There are two ways that you can create a class component. The traditional way is to use React.createClass(). ES6 introduced a syntax sugar that allows you to write classes that extend React.Component. However, both the methods are meant to do the same thing.

Class components can exist without state too. Here is an example of a class component that accepts an input props and renders JSX.

```jsx
class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello {props}</div>;
  }
}
```

We define a constructor method that accepts props as input. Inside the constructor, we call super() to pass down whatever is being inherited from the parent class. Here are a few details that you might have missed.

First, the constructor is optional while defining a component. In the above case, the component doesn't have a state, and the constructor doesn't appear to do anything useful. this.props used inside the render() will work regardless of whether the constructor is defined or not. However, here's something from the official docs:

Class components should always call the base constructor with props.
As a best practice, I will recommend using the constructor for all class components.

Secondly, if you're using a constructor, you need to call super(). This is not optional, and you will get the syntax error "Missing super() call in constructor" otherwise.

And my last point is about the use of super() vs. super(props). super(props) should be used if you're going to call this.props inside the constructor. Otherwise, using super() alone is sufficient.

Stateful Components vs. Stateless Components
This is another popular way of classifying components. And the criteria for the classification is simple: the components that have state and the components that don't.

Stateful Components
Stateful components are always class components. As previously mentioned, stateful components have a state that gets initialized in the constructor.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

3. Define stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?
