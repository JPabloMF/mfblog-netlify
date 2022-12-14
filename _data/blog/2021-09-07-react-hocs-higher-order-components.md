---
template: BlogPost
path: /react/hocs
date: 2021-09-07T01:28:08.085Z
title: "\U0001F1EC\U0001F1E7 React HOCs (Higher-Order Components)"
metaDescription: React Higher-Order Components
thumbnail: /assets/react.png
---
# HOCs (Higher-Order Components)

A higher-order component is a function that takes a component and returns a new component.

HOCs basically incorporate the don’t-repeat-yourself (DRY) principle of programming.

In this tutorial, we will learn what a HOC is, its basic structure, some use cases, and finally an example.

## What is a Higher-Order Component

A HOC is an advanced technique for reusing logic in React components. It is a pattern created out of React’s compositional nature.

Components take one or more components as arguments and return a new upgraded component.

HOCs are commonly used to design components with certain shared behavior in a way that makes them connected differently than normal state-to-props pattern.

### FACTS ABOUT HOCS

1. We don’t modify or mutate components. We create new ones.
2. A HOC is used to compose components for code reuse.
3. A HOC is a pure function. It has no side effects, returning only a new component.

Some real-world HOCs that you probably know would be:

| react-redux  | `connect(mapStateToProps, mapDispatchToProps)(component)` |
| ------------ | --------------------------------------------------------- |
| react-router | `withRouter(component)`                                   |

### Structure of a Higher-Order Component

* It is a component.
* It takes another component as an argument.
* Then, it returns a new component.
* The component it returns can render the original component that was passed to it.

Here's a HOC code snippet with its basic structure:

```jsx
import React from 'react';
// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
// And return another component
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};
```

We can see that `higherOrderComponent`takes a component`(WrappedComponent)`and returns another component inside of it. With this technique, whenever we need to reuse a particular component’s logic for something, we can create a HOC out of that component and use it wherever we like.

### Use cases

**Show a loader while a component waits for data.**

Most of the time, when building a web application, we would need to use a loader of some sort that is displayed while a component is waiting for data to be passed to its props. We could easily use an in-component solution to render the loader, which would work, but it wouldn’t be the most reusable solution. Better would be to write a common HOC that can track those props; and while those props haven’t been injected or are in an empty state, it can show a loading state.

**withLoading HOC**

```jsx
//withLoading.js
import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}
export default WithLoading;
```

**withLoading HOC usage:**

```jsx
import React from 'react';
import List from './components/List.js';
import WithLoading from './components/withLoading.js';
const ListWithLoading = WithLoading(List);
class App extends React.Component {
  state = {
{
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    );
  }
}
export default App;
```

Hope you enjoyed this article 👋😊

For more references review this link:

<https://www.smashingmagazine.com/2020/06/higher-order-components-react/>
