## Overview

Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed. Usually, this kind of logic deals with state in the component. Thus the moniker "stateful logic."

## Follow Along

Look at this component. Can you spot the stateful logic built into it?

```jsx
import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("Hooks are so fun!");
  const [inputText, setInputText] = useState("");

  const handleChanges = (e) => {
    setInputText(e.target.value);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">{title}</h1>
      <form onSubmit={changeTitle}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default DynamicTitle;
```

You are probably looking at the two functions - `handleChanges` and `changeTitle`. If so, that is correct! And we can probably also count the `title` and `inputText` state in there as well. Those are all great examples of stateful logic. And really, the sky's the limit on what could be considered stateful logic in a React component.

## Challenge

Now that you can identify stateful logic, go through a few of the React components you've built this week. Try to point out examples of different stateful logic. How many different examples did you find?

## Overview

React is, in essence, a combination of multiple components. A component can be as simple as a single piece of user interface that represents a small portion of our application. Conceptually, a component lifecycle happens in three phases. This idea is displayed nicely in the following diagram from one of the maintainers of React "Dan Abramov".

![drawing](https://image.ibb.co/j8CzEd/lifecycle.jpg)

As you can see, the three React lifestyle phases are 1) Birth/Mounting, 2) Growth/Updating, and 3) Death/Unmounting.

### The Birth/Mounting Phase

This is the phase when the component is being built out from the ground up. A few things are happening here:  
Whatever initial data you want access to will be defined on the constructor of this phase

- Your render method is invoked.
- `componentDidMount` gets called as well.

### Growth/Updating Phase

In the Growth/Updating phase you're updating compnent data.

- `setState` can be used to change the component's state data, forcing a call to `render`.
- `shouldComponentUpdate` is a method one could use here to stop a component from calling render if necessary.

### Death/Un-mounting Phase

Again, self-explanatory, but the unmounting phase includes removing the component from the screen.

- Component is removed from the screen.
- `componentWillUnmount` is called and can be used for any clean up you may need to do.

## Follow Along

Dive into the documentation at [ReactJS (Links to an external site.)](https://reactjs.org/docs/react-component.html#the-component-lifecycle)and look into some of the key pieces of the LifeCycle API.

The methods that we're going to look at are:

- `constructor`
- `render`
- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

Let's also compare where each of these methods belong within the react lifecycle by taking a look at [this diagram (Links to an external site.)](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

We will explore these in depth later on but for now, focus on warming up to the documentation and the idea that components have a lifecycle.

## Challenge

Read [this medium article (Links to an external site.)](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d){:target="\_blank"} about the component lifecycle. Take notes and share what you learned in a paragraph to your Project Manager via Slack.## Overview

React gave us the idea of components as independent pieces of UI. And thus far, you have learned how to build out `functional components` for use in making multiple DOM elements. Now, we're going to be learning about the `React.Component` base class that allows us to use some of the methods that the React team has curated to tap into what we call the `Component Lifecycle`. These methods (known as life cycle hooks _more on these to come_) give us control over how our components work, and if we'd like to use them, we have to build out a class component that `extends` the `React.Component` parent class. Any time you see a line of code that looks like the following, you're using the React.Component parent class, and you have the ability to tap into these methods.

```jsx
class FooComponent extends React.Component {}
```

By creating components as classes, you can set up a data object that your component is concerned with. This is done using `state` and setting up that object on our constructor method. Once we have some data that we can render out to the DOM, we need a vehicle that will allow us to render that data. This is achieved with the JSX method `render()` from within the life-cycle hook. We'll walk you through the steps below.

Declare your `class component` by extending the `React.Component` parent class. `class FooComponent extends React.Component {}`.  
Use the `constructor` function to set up some state. _because we're calling extends, we also need to call `super();` otherwise we won't have access the `this`_  
We need to render some sort of UI to the DOM. We do this by calling the life-cycle method `render`.

I like to remember these steps by referencing one of my favorite bands: Creedence Clearwater Revival (CCR), which stands for class, constructor, and render/return.

1.  Declare your _class_, and extend the `React.Component` Base class.

```jsx
class FooComponent extends React.Component {
```

2.  Now we'll set up our _constructor_ and add state.

```jsx
constructor() {
  super();
  this.state = {};
}
```

3.  _Render_ some UI and _return_ some `JSX.`

```jsx
render() {
  return <div>Hello, I am Foo Component</div>;
}
```

Our final component should look like this.

```jsx
class FooComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>Hello, I am Foo Component</div>;
  }
}
```

Now that we have constructed a skeleton for our Class component, it can be a bit more dynamic. The way we'll achieve this will be to use some data that we'll pre-define as some information we'd like our component to display. We'll then take that data and do this really cool thing called `interpolation` in order to present it to the DOM within some Text.

Components built out extending the Base `React.Component` class come with a bunch of benefits directly from the React API. A list of the benefits to what we get out of the Component class can be found [here (Links to an external site.)](https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate), in theReact documentation about class components. We will be discussing the `life-cycle` methods at another place in time, so don't worry too much about those for now.

For now, let's focus on a component caring about its own state (data) and managing that state in a reactive way. The `state` object that we set up on our `constructor` has a very React-specific way of doing things. It allows us to drive our UI using data. Again, think about Facebook here. You see a LOT of data and interact with it all of the time when you're using the Facebook app. Because of the way we work with social media today, we expect this data the UI to represent that data in close to real-time. This is one reason why React is really good and how reactivity can be achieved.

## Follow Along

Let's work together to build out a class component that prints a message to the screen using a few DOM elements. We will hold a message on state, and print that message to the screen by selecting it an assigning it to a DOM element. Then we will take it a step further and pass that message down to another component using props.

Go ahead and navigate over to [this Codesandbox (Links to an external site.)](https://codesandbox.io/s/3xwzql38nm), where we will write our React Code. CodeSandbox is an online editor that can be used to write React Code right away! I can't emphasize how cool this really is. For now, you'll just have to trust me.

You'll notice that we're getting an error on this page. As we begin to define our app class, elements will start to come to life on for us. For now, let's start by simply adding the class through CCR.

When you're done, your browser window should re-render without any errors. Your app class should look like this:

```jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <div>Hello From App!</div>;
  }
}
```

Now, let's add a property to our state data. Define a `message` property on the state object.

```jsx
this.state = {
  message: "Hello from App State!!",
};
```

Now that we have the message on our component's state, we can use it through interpolation. In our render method, let's change the message inside of `div` to reference the state object. Remember the `this` keyword when pointing to an object on the Class constructor.

```jsx
render() {
  return <div>{this.state.message}</div>;
}
```

Hooray! You've now built your first class component, and you're ready to rock n' roll.

## Challenge

Let's take the functionality of this class component that we built earlier and extend it just a little bit. Declare a `Functional Component` called `RenderMessage` inside [this CodeSandbox (Links to an external site.)](https://codesandbox.io/s/103jkor46q).

- Make sure you declare your Props Object that will be passed into this component.
- Return a `div` who's child is `props.message`
- Now inside of the `App` class pass in that `RenderMessage` component and pass down a message prop to `RenderMessage`. This message prop should be set equal to the message property on the state object.
- Once it's all wired up properly you've done it!

## Overview

`Custom Hooks`, are so-called because you are building the hook yourself (customizing it), to apply non-visual behavior and stateful logic throughout your components. This way, you can reuse the same hook over and over again. Custom hooks follow the same patterns of naming that you've already learned (i.e. prefacing the function name with `use`, as in `useState`). You can build a reusable custom hook for anything from handling controlled inputs, to managing event listeners, or watching for key presses.

## Follow Along

Let's start with the same component that we evaluated in the objective above. Go ahead and look over it one more time, this time making sure to understand what the various parts are doing.

```jsx
import React, { useState } from "react";

const DynamicTitle = () => {
  const [title, setTitle] = useState("This is a class component");
  const [inputText, setInputText] = useState("");

  const handleChanges = (e) => {
    setInputText(e.target.value);
  };

  const changeTitle = (e) => {
    e.preventDefault();
    setTitle(inputText);
    setInputText("");
  };

  return (
    <div className="Wrapper">
      <h1 className="Title">{title}</h1>
      <form onSubmit={changeTitle}>
        <div className="Input">
          <input
            className="Input-text"
            id="input"
            name="inputText"
            onChange={handleChanges}
            placeholder="Create new title"
            type="text"
            value={inputText}
          />
          <label htmlFor="input" className="Input-label">
            New title
          </label>
        </div>
      </form>
    </div>
  );
};

export default DynamicTitle;
```

See how we have a `useState` hook, a `handleChange` function to update based on any changes, and a `changeTitle` function to change the actual title of the component when we submit the form?

Now, what happens if we need to issue state for multiple `input` tags? If we were to follow the lead of the patterns shown above, we would end up having to rewrite large amounts of our code for each `useState` call that we've invoked in order to create state for our second, third, and fourth `input`s.

Instead, let's build out our custom hook that to reuse stateful logic. In this way, we avoid repeating code unnecessarily. Read the following function and try to guess what each piece of code is doing:

```jsx
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};
```

In this `useInput` custom hook function, we're taking in an `initialValue` and returning three new values. We pass `initialValue` as a parameter on the function. `initialValue` is then passed into the `useState` hook, which returns an array with our `value` variable and `setValue` function (just the same as what you've used up to this point).

Next, we have a `handleChanges` function that uses the `setValue` function to update state to a new value. Finally, we return an array from our `useInput` custom hook containing the `value` variable, the `setValue` function, and the `handleChanges` function.

Let's take a look at this custom hook when it's imported and used in a component.

```jsx
import React, { useState } from "react";
import { useInput } from "./useInput.js";

const CustomForm = () => {
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");

  const resetValues = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={resetValues}>
      <input
        className="username-text"
        id="username"
        name="username"
        onChange={(e) => handleUsername(e.target.value)}
        placeholder="Username"
        type="text"
        value={username}
      />
      <input
        className="password-test"
        id="password"
        name="password"
        onChange={(e) => handlePassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <input
        className="email-text"
        id="email"
        name="email"
        onChange={(e) => handleEmail(e.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
```

Whoa. That looks crazy, right? Don't worry. We're going to dissect this whole script to figure out exactly what each part is doing.

First off, notice that we're invoking the `useInput` custom hook three times at the top of the component and passing in an empty string as each one's initial value:

```jsx
const [username, setUsername, handleUsername] = useInput("");
const [password, setPassword, handlePassword] = useInput("");
const [email, setEmail, handleEmail] = useInput("");
```

Our `useInput` hook returns a new copy of our custom hook and state each time. Also, because array destructuring is based on positioning and not the name, we are allowed by JavaScript to name each of the three items returned from `useInput` in different ways. This is why we can set the first item to `username`, the second to `setUsername`, and the third to `handleUsername` while the next two `useInput` calls return differently-named variables and functions.

From these invocations, it now becomes easy to rig up each of our input tags in our JSX just the same as we did before. Here they are again for your reference:

```jsx
<form onSubmit={resetValues}>
  <input
    className="username-text"
    id = "username";
    name = "username";
    onChange={e => handleUsername(e.target.value)}
    placeholder = "Username";
    type = "text";
    value={username}
  />
  <input
    className="password-test"
    id = "password";
    name = "password";
    onChange={e => handlePassword(e.target.value)}
    placeholder = "Password";
    type = "password";
    value={password}
  />
  <input
    className="email-text"
    id = "email";
    name = "email";
    onChange={e => handleEmail(e.target.value)}
    placeholder = "Email";
    type = "text";
    value={email}
  />
  <button type="submit">Submit</button>
</form>
```

Notice how we are setting our `handleUsername`, `handlePassword`, and `handleEmail` functions to process changes to the input. Remember how we returned a `handleChanges` function from our custom hook? Well, we've renamed them here (again, thanks to array destructuring) and are using them just the same as before. However, now, we have less code for them in our component.

The final thing you should notice is the `resetValue` function. When we invoke it, we use the `setValue`s returned from each `useInput` (again, each one is named differently) and pass it in our reset value (in this case, an empty string). Isn't this an easy way to change your state?

Here they are again for your reference:

```jsx
const resetValues = (e) => {
  e.preventDefault();
  setUsername("");
  setPassword("");
  setEmail("");
};
```

By building out a custom hook, we can skip writing out all of the stateful logic for our non-visual behavior. Custom hooks produce beautiful, `DRY` code that is easy to read _and_ use. You have built a _reusable_ piece of code that makes it easy for you to import anywhere in your application and build out stateful logic in any of your components.

## Challenge

Now that you can identify custom hook logic and how you might both create and use it in your components, go back to several components you've built over the last week and refactor the state in some forms you made to use the `useInput` custom hook from the component in the examples above.
[Click here (Links to an external site.)](https://codesandbox.io/s/yk37ykmyrz) to access the code within this video's follow-along exercise.

## Overview

Up until this point, our applications have been fairly simple. One or two components with a bit of state to allow for interaction. As our applications grow, so to do the complexity way components relate to each other. To do this, it helps to see our components as being structure in a `parent / child` relationship.

Here is an example of a more complicated application hierarchy.

![Graph 1](https://drive.google.com/uc?id=1Ahn_s5WHHcJDD_t17eWAGOlIoX7ZTy4i)

Simple or complex, every application needs shared, persistent data to run.

Currently, we have been using `state` to hold that data. Unlike statically defined data within our component, state is persistent, changeable and can flow into other components through use of `prop drilling`. Changes to state immediately rerender the parts of our components effected by that change of state in a process called `reactivity`. When working with more complex component trees, state always runs from a `parent` component down to a `child`.

![Graph 2](https://drive.google.com/uc?id=1fjz_nVILoUG0kr1m0jzfUtQAiKf_-kga)

What if we want to modify that data? Well, just as we can pass parent state down through props, we can also pass functions that modify child state! Executing these functions in our child components will cause state to change at our parent level components, resulting in reactive rendering through out all our application!

![Graph 3](https://drive.google.com/uc?id=1-xf6YVOb38HINlQOnBMhkYYXy8ypOP2u)

We have already seen how to pass state through props using functional components. Now, let's take a look at how we work with state in class based components.

## Follow Along

Consider the following component:

```jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: "world!",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.welcomeMessage}!</h1>
      </div>
    );
  }
}
```

Let's create a sub component using functional components to hold our welcome message.

```jsx
const WelcomeBanner = (props) => {
  return <h1>Hello, {props.message}!</h1>;
};
```

Now, lets refactor our component using React classes.

```jsx
class WelcomeBanner extends React.Component {
    render(){
        return(
        <div>
            <h1>Hello, {this.props.message}</h1>
        </div>
    }
}
```

Notice that props are not passed in as they were in functional components. Instead, props are attached to the this object, just like state.

Great! We are sharing data between a component's state and a component's props. This means that when the state object changes, so too will the props.

Now let's add in the ability to modify that state. To do this we will need to:

- Connect a state change method to an event listener in our child component.
- Create the substance of that method in our parent.
- Pass that method to the child through props.

Let's start at bottom, our child component. Let's say that we want use a form to dynamically update our message statement. This small component should do nicely:

```jsx
const FormComponent = props => {
  return (
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage} />
    </form>
};
```

The only problem is, we don't have access to state all the way down here! Let's build out our state changing method where it belongs, in App.js our `parent`. While we are at it, let's add our form component to our rendering so we can see it in the first place.

```jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: "world!",
    };
  }

  updateStateMessage = (e) => {
    this.setState({ welcomeMessage: e.target.value });
  };

  render() {
    return (
      <div>
        <WelcomeBanner message={this.state.welcomeMessage} />
        <FormComponent updateStateMessage={this.updateStateMessage} />
      </div>
    );
  }
}
```

And there we go! We successfully passed our `state data` downstream through `props` in WelcomeBanner. At the same time, we can also successful pass data back upstream by executing `state modifying functions` passed through `props` in FormComponent.

## Challenge

Using the components we just created (App, FormComponent and MessageComponent), try building out a form that will allow a user to handle data. You'll need a button, input field, and some data-bound to a DOM element that displays what the user is submitting.

When a user clicks submit, show the data that's on state in an `alert` statement.

### Stretch

Loop over a list of items showing those items to the screen. (Can be a list of strings). When a user clicks submit, instead of logging the item, push an item into that list, and watch the magic happen.

- We're going to be updating some state on a parent component.
- That state will be wired up to a few other components as we pass the props around.
- We will also be passing around a few handler functions that help us update/delete our state.

Lets set up a form component that we can use to update our message component from above.

```jsx
const WelcomeBanner = (props) => <h1>Hello, {props.message}!</h1>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: "world!",
    };
  }

  render() {
    return (
      <div>
        <WelcomeBanner message={this.state.welcomeMessage} />
      </div>
    );
  }
}
```

Now let's build a form component that can handle some data defined on state, below on the child components.

```jsx
const FormComponent = (props) => {
  return (
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage} />
    </form>
  );
};
```

We're going to need to build out a change handler function on our `App` component that we can pass down to the form. We'll have to define the prop as `updateStateMessage` in order to make our `onChange` event handler work out properly.

```jsx
...

messageChangeHandler = event => {
  this.setState({welcomeMessage: event.target.value});
};

render() {
  return (
    <div>
      <WelcomeBanner message={this.state.welcomeMessage} updateStateMessage={this.updateStateMessage}/>
    </div>
  );
}
...
```

## Challenge

Using the following tools:

- Class component
- functional FormComponent, MessageComponent
- click, and change handlers
- `setState`

Build out a form that will allow a user to handle data. You'll need a button, input field, and some data-bound to a DOM element that displays what the user is submitting.

When a user clicks submit, show the data that's on state in an `alert` statement.

**Stretch** Loop over a list of items showing those items to the screen. (Can be a list of strings). When a user clicks submit, instead of logging the item, push an item into that list, and watch the magic happen.

## Overview

Just as we can compose functions in vanilla JavaScript and components in React to create new functionality, we can extend our stateful logic by combining several hooks in a powerful, single custom hook. This compositional ability allows us to build out interesting abilities by combining various hooks in our application.

We can develop this complexity using multiple hooks inside a single custom hook. We've done this already when we called `useState` inside `useInput`. Pretty cool! Now imagine writing several custom hooks and combining all of that logic into a single custom hook to use in your components. The possibilities are dizzying! And amazing! Let's try it out by expanding the `useInput` custom hook we've already built.

## Follow Along

We need to start by building out a second custom hook. Later on, we'll combine it with the `useInput` custom hook from the previous objective to achieve a more compelling hook with multiple pieces of stateful logic.

First, we'll implement the new hook that we will call `useLocalStorage`:

```jsx
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
```

Let's walk through what we're doing here. First, we pass in a key-value (like: "input1," "input2" ) and an `initialValue`. These two parameters (key and value) are used in the `useState` hook call and used immediately inside our custom hooks. Instead of just passing in an initial value to this `useState` hook, we are using an anonymous arrow function as a callback to do two things:

1.  Check if the `window.localStorage` has a specific item (retrieved by `key`) in it
2.  Return that item from local storage if it exists or the initialValue otherwise

Because of this, our hook can now successfully check to see if a specific state item exists in `localStorage`, **and** it can use that item if it exists instead of the provided `initialValue`. Then, we also have a `setValue` function that takes a `value` as a parameter, sets it to the current `storedValue` by using the `setStoredValue` provided by `useState`, and sets it `localStorage`. As our state is now stored, our custom hook will check here on refresh to see if the state exists.

Now that we have a custom hook for controlling value placement (and updates) in `localStorage`, we can combine it with `useInput` to create powerful logic. Take a look at the completed code, and then we'll talk about what it's doing:

```jsx
import { useState } from "react";

export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
```

While our `useLocalStorage` hook has stayed the same, our `useInput` custom hook has some nice upgrades going on. Instead of implementing `useState` from React as before, we're now using `useLocalStorage`. Furthermore, we're also taking in two parameters instead of one - `key` and `initialValue`. These are then passed directly into the `useLocalStorage` hook. Immediately, the hook sets about implementing special logic with the variables as described above. This returns to our `useInput` custom hook with either a value from `localStorage` or our initialValue, and our `useInput` custom hook then returns a `value`, `setValue` function, and a `handleChanges` function in an array just the same as it did before.

Now when we call the `useInput` hook in a component to control inputs dynamically, we just need to pass in a unique key for each input to keep track of it in localStorage. Something like this:

```jsx
const [username, setUsername, handleUsername] = useInput("userName", "");
const [password, setPassword, handlePassword] = useInput("password", "");
const [email, setEmail, handleEmail] = useInput("email", "");
```

Although this isn't something you will often do (storing input values in localStorage), this setup is quite powerful, and it effectively demonstrates how composable hooks can be; by combining the stateful logic of multiple custom hooks, you can compose a really nice custom hook with advanced stateful logic.

One final thing to note is that we can employ the `useLocalStorage` custom hook in other places now as well. So, not only do we have an extra-powerful `useInput` created by composing multiple hooks together, we also have another custom hook available to us anytime we want to persist data in localStorage.

## Challenge

Try to think of different instances where you could compose different custom hooks together, particularly with the new `useLocalStorage` hook that you learned above. Be as creative as possible in the implementations that you think of.
You can access the example in this video [here (Links to an external site.)](https://codesandbox.io/s/k0q2wwyj2o).

## Overview

In our last objective, we explored how `state` can be displayed and changed by passing state value and state modifying functions respectively through `props`. We explored this using the onChange `eventlistener`. That is, of course, only one of many user event you can integrate into your applications!

We have already seen how events are handled within React class components. We need an `event handler` function and we need to link it to an `eventlistener` method within our DOM.

```jsx
class Button extends React.Component {
  handleButton = (e) => {
    console.log(e);
  };

  render() {
    return <button onClick={this.handleButton}>Click Me</button>;
  }
}
```

Notice once again the need for that `this` object when referencing our `event handler`. Within class components, just like our props and state, our event handlers are bound to the instance of this class and are accessed through `this.`

We have also seen that "e" parameter before. This parameter is known is React as a `synthetic event` object. Inside this object, we will have access to various pieces of information regarding this event triggered, including the target DOM element, the type of event, and methods that control the propagation of that event like preventDefault. For more details on the `synthetic event` objects, check out the reference materials [here (Links to an external site.)](https://reactjs.org/docs/events.html).

Let's add in some functionality to our event handler.

```jsx
class Button extends React.Component {
  clickHandler = (event) => {
    console.log(event); // this is the react Synthetic Event
  };

  render() {
    return <button onClick={this.clickHandler}>Click Me</button>;
  }
}
```

Now, when we click on our button, we can actually print out our `synthetic event` object. We can now do anything we want within `event handler`, from triggering a change of state to starting an external api call.

## Follow Along

Now, let's build out a little Application that can handle some data that we pass through a few JSX elements. We're going to build out some `event handler` functions using the following `event listeners`:

- onClick
- onDoubleClick
- onMouseEnter
- OnChange

First, let's build out a singleClickHandler function.

```jsx
singleClickHandler = () => alert("Single Click!");
```

Now, we add it to a button within our app's render function.

```jsx
render() {
. . .
<button onClick={this.singleClickHandler}>Click Handler Demo</button>
. . .
```

Lets repeat the process for our doubleClick, mouseEnter and onChange events.

```jsx
doubleClickHandler = () => alert("Double Clicked!");

mouseEnterHandler = () => alert("Mouse Entered");

changeHandler = () => alert("Item was changed");
<div className="App">
  <h1>Hello Handlers</h1>
  <h2>Lets build out some handler functions.</h2>
  <button onClick={this.singleClickHandler}>Click Handler Demo</button>
  <button onDoubleClick={this.doubleClickHandler}>Double Click Handler</button>
  <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
  <input onChange={this.changeHandler} placeholder="Change my input" />
</div>;
```

Try playing around with the events and see how are interacting one with another.

Lets take a closer look at the input onChange event for a min. Let's pass in the synthetic event through the function body by adding it as a `parameter` to the `event handler` connected to it.

```jsx
changeHandler = (e) => alert(event.target.value);
```

One of the most useful properties attached to `synthetic events` is target. This provides information on the text, value, style, attached attributes and other useful data within our DOM element. In this case we can print out our input's value.

Lets add in some state to get realtime feedback of what we are typing. Once again, we do this within class components by within the class `constructor` and make our app display that change.

```jsx
class App extends React.Component {
 constructor() {
    super();
    this.state = {
      displayText: '',
    }
  }
…
 render() {
    return(     …
        <h1>{this.displayText}</h1>
        …
    );
 }
}
```

Lets also update our change handler to update our state:

```jsx
changeHandler = (event) => {
  this.setState({ displayText: event.target.value });
};
```

Excellent! Now, `setState` will update our display property on our state object by simply typing in the input field. Let's prove this by logging our state object inside the render function.

```jsx
...
render() {
  console.log(this.state);
...
```

You can see a working copy of this example [here (Links to an external site.)](https://codesandbox.io/s/rmnj2r1o0p).

## Challenge

Lets expand on our example!

Fork the code provided above and do the following.

- Add another value to state that holds the secondDisplayValue.
- Display that value in a h2 tag.
- Create a button that will put the value of state.displayText within our secondDisplayValue property.
- Add an event listener and event handler function that will cause our h2 to show displayText when we click our new button.
  //APPEND-DIR.js
  const fs = require( 'fs' );
  let cat = require( 'child_process' ).execSync( 'cat \*' ).toString( 'UTF-8' );
  fs.writeFile( 'output.md', cat, ( err ) => { if ( err ) throw err; } );

---

---

# ReactJS Cheat Sheet:

# React.js cheatsheet

> React.Component · render() · componentDidMount() · props/state · dangerouslySetInnerHTML · React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.

[React](https://reactjs.org/) is a JavaScript library for building user interfaces. This guide targets React v15 to v16.

# React Cheat Sheet

## render

    render() {
      return <div />;
    }

## constructor

```js
    constructor(props) {
      super(props);
      this.state = {
        list: props.initialList
      };
    }

    // where props aren't used in constructor

    constructor() {
      super();
      this.state = {
        list: []
      };
    }
```

## componentWillMount

```js
    componentWillMount() {
      // invoked once.
      // fires before initial 'render'
    }
```

## componentDidMount

```js
    componentDidMount() {
      // good for AJAX: fetch, ajax, or subscriptions.

      // invoked once (client-side only).
      // fires before initial 'render'
    }
```

## componentWillReceiveProps

```js
    componentWillReceiveProps(nextProps) {
      // invoked every time component recieves new props.
      // does not before initial 'render'
    }
```

## shouldComponentUpdate

```js
    shouldComponentUpdate(nextProps, nextState) {
      // invoked before every update (new props or state).
      // does not fire before initial 'render'.
    }
```

## componentWillUpdate

```js
    componentWillUpdate(nextProps, nextState) {
      // invoked immediately before update (new props or state).
      // does not fire before initial 'render'.

      // (see componentWillReceiveProps if you need to call setState)
    }
```

**✖ this.setState**

## componentDidUpdate

```js
    componentDidUpdate(prevProps, prevState) {
      // invoked immediately after DOM updates
      // does not fire after initial 'render'
    }
```

## componentWillUnmount

```js
    componentWillUnmount() {
      // invoked immediately before a component is unmounted.
    }
```

## setState (function)

```js
// good for state transitions

this.setState((prevState, props) => {
  return { count: prevState.count + props.step };
});
```

## setState (object)

````js
    // good for static values

    this.setState({mykey: 'my new value'});

    ```

setState (optional callback)
----------------------------
```js
    // fires after setState
    // prefer componentDidUpdate

    this.setState(
      (prevState, props) => ({ count: prevState.count + props.step }),
      () => console.log(this.state.count)
    );
````

## forceUpdate

```js
// forces a re-render; AVOID if possible

this.forceUpdate();
```

## displayName

````js
    displayName: "MyComponent"


    ```

defaultProps
------------
```js
    class Greeting extends React.Component {
          render() {
            return <h1>Hi {this.props.name}</h1>
          }
        }

        CustomButton.defaultProps = {
          name: 'guest'
        };
````

## Children.map

```js
React.Children.map(this.props.children, (child, i) => {
  return child;
});
```

## Children.forEach

```js
React.Children.forEach(this.props.children, (child, i) => {
  console.log(child + " at index: " + i);
});
```

## Children.count

```js
React.Children.count(this.props.children);
```

## Children.only

```js
React.Children.only(this.props.children);
```

## Children.toArray

```js
React.Children.toArray(this.props.children);
```

## Context (example)

```js
// requires 'prop-types' library

import { string } from "prop-types";

class Cowboy extends React.Component {
  childContextTypes: {
    salutation: string,
  };

  getChildContext() {
    return { salutation: "Howdy" };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const Greeting = (props, context) => (
  <div>
    {context.salutation} {props.name}.
  </div>
);

Greeting.contextTypes = {
  salutation: PropTypes.string,
};

// <Greeting name="Michael" />
// => Michael.

// <Cowboy><Greeting name="Michael" /></Cowboy>
// => Howdy Michael.
```

## contextTypes

```js
    // add to the context-aware component
    // requires 'prop-types' library

    contextTypes: {
      color: PropTypes.string
    },
```

## childContextTypes

```js
    // add to the context provider
    // requires 'prop-types' library

    childContextTypes: {
      color: PropTypes.string
    },
```

## getChildContext

```js
    // add to the context provider

    getChildContext() {
      return {color: "purple"};
    }

```

## [#](#components)Components

### Components

```js
import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    return <div className="message-box">Hello {this.props.name}</div>;
  }
}

const el = document.body;
ReactDOM.render(<Hello name="John" />, el);
```

Use the [React.js jsfiddle](https://jsfiddle.net/reactjs/69z2wepo/) to start hacking. (or the unofficial [jsbin](http://jsbin.com/yafixat/edit?js,output))

### Import multiple exports

```js
    import React, {Component} from 'react'
    import ReactDOM from 'react-dom'


    class Hello extends Component {
      ...
    }

```

### Properties

```js
    <Video fullscreen={true} autoplay={false} />


    render () {
      this.props.fullscreen
      const { fullscreen, autoplay } = this.props
      ···
    }

```

Use `this.props` to access properties passed to the component.

See: [Properties](https://reactjs.org/docs/tutorial.html#using-props)

### States

```js
    constructor(props) {
      super(props)
      this.state = { username: undefined }
    }


    this.setState({ username: 'rstacruz' })


    render () {
      this.state.username
      const { username } = this.state
      ···
    }

```

Use states (`this.state`) to manage dynamic data.

With [Babel](https://babeljs.io/) you can use [proposal-class-fields](https://github.com/tc39/proposal-class-fields) and get rid of constructor

```js
    class Hello extends Component {
      state = { username: undefined };
      ...
    }
```

See: [States](https://reactjs.org/docs/tutorial.html#reactive-state)

### Nesting

```js
class Info extends Component {
  render() {
    const { avatar, username } = this.props;

    return (
      <div>
        <UserAvatar src={avatar} />
        <UserProfile username={username} />
      </div>
    );
  }
}
```

As of React v16.2.0, fragments can be used to return multiple children without adding extra wrapping nodes to the DOM.

```js
import React, { Component, Fragment } from "react";

class Info extends Component {
  render() {
    const { avatar, username } = this.props;

    return (
      <Fragment>
        <UserAvatar src={avatar} />
        <UserProfile username={username} />
      </Fragment>
    );
  }
}
```

Nest components to separate concerns.

See: [Composing Components](https://reactjs.org/docs/components-and-props.html#composing-components)

### Children

```js
<AlertBox>
  <h1>You have pending notifications</h1>
</AlertBox>;

class AlertBox extends Component {
  render() {
    return <div className="alert-box">{this.props.children}</div>;
  }
}
```

Children are passed as the `children` property.

## [#](#defaults)Defaults

### Setting default props

```js
Hello.defaultProps = {
  color: "blue",
};
```

See: [defaultProps](https://reactjs.org/docs/react-component.html#defaultprops)

### Setting default state

```js
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
}
```

Set the default state in the `constructor()`.

And without constructor using [Babel](https://babeljs.io/) with [proposal-class-fields](https://github.com/tc39/proposal-class-fields).

```js
class Hello extends Component {
  state = { visible: true };
}
```

See: [Setting the default state](https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state)

## [#](#other-components)Other components

### Functional components

```js
function MyComponent({ name }) {
  return <div className="message-box">Hello {name}</div>;
}
```

Functional components have no state. Also, their `props` are passed as the first parameter to a function.

See: [Function and Class Components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

### Pure components

```js
    import React, {PureComponent} from 'react'

    class MessageBox extends PureComponent {
      ···
    }

```

Performance-optimized version of `React.Component`. Doesn’t rerender if props/state hasn’t changed.

See: [Pure components](https://reactjs.org/docs/react-api.html#react.purecomponent)

### Component API

```js
    this.forceUpdate()


    this.setState({ ... })
    this.setState(state => { ... })


    this.state
    this.props

```

These methods and properties are available for `Component` instances.

See: [Component API](https://facebook.github.io/react/docs/component-api.html)

## [#](#lifecycle)Lifecycle

### Mounting

| Method                   | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `constructor` _(props)_  | Before rendering [#](https://reactjs.org/docs/react-component.html#constructor)                      |
| `componentWillMount()`   | _Don’t use this_ [#](https://reactjs.org/docs/react-component.html#componentwillmount)               |
| `render()`               | Render [#](https://reactjs.org/docs/react-component.html#render)                                     |
| `componentDidMount()`    | After rendering (DOM available) [#](https://reactjs.org/docs/react-component.html#componentdidmount) |
| `componentWillUnmount()` | Before DOM removal [#](https://reactjs.org/docs/react-component.html#componentwillunmount)           |
| `componentDidCatch()`    | Catch errors (16+) [#](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)          |

Set initial the state on `constructor()`. Add DOM event handlers, timers (etc) on `componentDidMount()`, then remove them on `componentWillUnmount()`.

### Updating

| Method                                                  | Description                                          |
| ------------------------------------------------------- | ---------------------------------------------------- |
| `componentDidUpdate` _(prevProps, prevState, snapshot)_ | Use `setState()` here, but remember to compare props |
| `shouldComponentUpdate` _(newProps, newState)_          | Skips `render()` if returns false                    |
| `render()`                                              | Render                                               |
| `componentDidUpdate` _(prevProps, prevState)_           | Operate on the DOM here                              |

Called when parents change properties and `.setState()`. These are not called for initial renders.

See: [Component specs](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops)

## [#](#hooks-new)Hooks (New)

### State Hook

```js
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Hooks are a new addition in React 16.8.

See: [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

### Declaring multiple state variables

```js
function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
}
```

### Effect hook

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

By default, React runs the effects after every render — including the first render.

### Building your own hooks

#### Define FriendStatus

```js
import React, { useState, useEffect } from "react";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

Effects may also optionally specify how to “clean up” after them by returning a function.

#### Use FriendStatus

```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}
```

See: [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

### Hooks API Reference

Also see: [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

#### Basic Hooks

| Hook                       | Description                               |
| -------------------------- | ----------------------------------------- |
| `useState`_(initialState)_ |                                           |
| `useEffect`_(() => { … })_ |                                           |
| `useContext`_(MyContext)_  | value returned from `React.createContext` |

Full details: [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)

#### Additional Hooks

| Hook                                      | Description                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| `useReducer`_(reducer, initialArg, init)_ |                                                                              |
| `useCallback`_(() => { … })_              |                                                                              |
| `useMemo`_(() => { … })_                  |                                                                              |
| `useRef`_(initialValue)_                  |                                                                              |
| `useImperativeHandle`_(ref, () => { … })_ |                                                                              |
| `useLayoutEffect`                         | identical to `useEffect`, but it fires synchronously after all DOM mutations |
| `useDebugValue`_(value)_                  | display a label for custom hooks in React DevTools                           |

Full details: [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)

## [#](#dom-nodes)DOM nodes

### References

```js
class MyComponent extends Component {
  render() {
    return (
      <div>
        <input ref={(el) => (this.input = el)} />
      </div>
    );
  }

  componentDidMount() {
    this.input.focus();
  }
}
```

Allows access to DOM nodes.

See: [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### DOM Events

```js
class MyComponent extends Component {
  render() {
    <input
      type="text"
      value={this.state.value}
      onChange={(event) => this.onChange(event)}
    />;
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }
}
```

Pass functions to attributes like `onChange`.

See: [Events](https://reactjs.org/docs/events.html)

## [#](#other-features)Other features

### Transferring props

```js
<VideoPlayer src="video.mp4" />;

class VideoPlayer extends Component {
  render() {
    return <VideoEmbed {...this.props} />;
  }
}
```

Propagates `src="..."` down to the sub-component.

See [Transferring props](https://facebook.github.io/react/docs/transferring-props.html)

### Top-level API

```js
    React.createClass({ ... })
    React.isValidElement(c)


    ReactDOM.render(<Component />, domnode, [callback])
    ReactDOM.unmountComponentAtNode(domnode)


    ReactDOMServer.renderToString(<Component />)
    ReactDOMServer.renderToStaticMarkup(<Component />)

```

There are more, but these are most common.

See: [React top-level API](https://reactjs.org/docs/react-api.html)

## [#](#jsx-patterns)JSX patterns

### Style shorthand

```js
const style = { height: 10 };
return <div style={style}></div>;

return <div style={{ margin: 0, padding: 0 }}></div>;
```

See: [Inline styles](https://reactjs.org/tips/inline-styles.html)

### Inner HTML

```js
function markdownify() {
  return "<p>...</p>";
}
<div dangerouslySetInnerHTML={{ __html: markdownify() }} />;
```

See: [Dangerously set innerHTML](https://reactjs.org/tips/dangerously-set-inner-html.html)

### Lists

```js
class TodoList extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item) => (
          <TodoItem item={item} key={item.key} />
        ))}
      </ul>
    );
  }
}
```

Always supply a `key` property.

### Conditionals

```js
<Fragment>{showMyComponent ? <MyComponent /> : <OtherComponent />}</Fragment>
```

### Short-circuit evaluation

```js
<Fragment>
  {showPopup && <Popup />}
  ...
</Fragment>
```

## [#](#new-features)New features

### Returning multiple elements

You can return multiple elements as arrays or fragments.

#### Arrays

```js
    render () {

      return [
        <li key="A">First item</li>,
        <li key="B">Second item</li>
      ]
    }

```

#### Fragments

```js
    render () {

      return (
        <Fragment>
          <li>First item</li>
          <li>Second item</li>
        </Fragment>
      )
    }

```

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Returning strings

```js
    render() {
      return 'Look ma, no spans!';
    }

```

You can return just a string.

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Errors

```js
    class MyComponent extends Component {
      ···
      componentDidCatch (error, info) {
        this.setState({ error })
      }
    }

```

Catch errors via `componentDidCatch`. (React 16+)

See: [Error handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

### Portals

```js
    render () {
      return React.createPortal(
        this.props.children,
        document.getElementById('menu')
      )
    }

```

This renders `this.props.children` into any location in the DOM.

See: [Portals](https://reactjs.org/docs/portals.html)

### Hydration

```js
const el = document.getElementById("app");
ReactDOM.hydrate(<App />, el);
```

Use `ReactDOM.hydrate` instead of using `ReactDOM.render` if you’re rendering over the output of [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html).

See: [Hydrate](https://reactjs.org/docs/react-dom.html#hydrate)

## [#](#property-validation)Property validation

### PropTypes

```js
import PropTypes from "prop-types";
```

See: [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

| Key   | Description |
| ----- | ----------- |
| `any` | Anything    |

#### Basic

| Key      | Description   |
| -------- | ------------- |
| `string` |               |
| `number` |               |
| `func`   | Function      |
| `bool`   | True or false |

#### Enum

| Key                       | Description |
| ------------------------- | ----------- |
| `oneOf`_(any)_            | Enum types  |
| `oneOfType`_(type array)_ | Union       |

#### Array

| Key            | Description |
| -------------- | ----------- |
| `array`        |             |
| `arrayOf`_(…)_ |             |

#### Object

| Key               | Description                          |
| ----------------- | ------------------------------------ |
| `object`          |                                      |
| `objectOf`_(…)_   | Object with values of a certain type |
| `instanceOf`_(…)_ | Instance of a class                  |
| `shape`_(…)_      |                                      |

#### Elements

| Key       | Description   |
| --------- | ------------- |
| `element` | React element |
| `node`    | DOM node      |

#### Required

| Key                | Description |
| ------------------ | ----------- |
| `(···).isRequired` | Required    |

### Basic types

```js
MyComponent.propTypes = {
  email: PropTypes.string,
  seats: PropTypes.number,
  callback: PropTypes.func,
  isClosed: PropTypes.bool,
  any: PropTypes.any,
};
```

### Required types

```js
MyCo.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### Elements

```js
MyCo.propTypes = {
  element: PropTypes.element,

  node: PropTypes.node,
};
```

### Enumerables (oneOf)

```js
MyCo.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
};
```

### Arrays and objects

```js
MyCo.propTypes = {
  list: PropTypes.array,
  ages: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.object,
  user: PropTypes.objectOf(PropTypes.number),
  message: PropTypes.instanceOf(Message),
};

MyCo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};
```

Use `.array[Of]`, `.object[Of]`, `.instanceOf`, `.shape`.

### Custom validation

```js
MyCo.propTypes = {
  customProp: (props, key, componentName) => {
    if (!/matchme/.test(props[key])) {
      return new Error("Validation failed!");
    }
  },
};
```
