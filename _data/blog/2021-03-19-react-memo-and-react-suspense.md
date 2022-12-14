---
template: BlogPost
path: /react/hooks/react-memo-lazy-suspense
date: 2021-03-19T19:32:17.728Z
title: "React.memo, React.lazy and React.suspense \U0001F1EC\U0001F1E7"
metaDescription: 'Learn what is React.memo, React.suspense and React.lazy'
thumbnail: /assets/react.png
---
# React.memo, React.lazy and React.suspense

Today you will learn what is and how to use React.memo, React.suspense and React.lazy

Let's start with React.memo

## React.memo

In a **class component** we use `PureComponent`or `shouldComponentUpdate`to validate if input props are the same.

In a **function component** we can use `React.memo`

```jsx
const MyComponent = React.memo(function MyComponent() {
  // Only rerenders if props change
});
```

## React.lazy and React.suspense

The `React.lazy` hook lets you render a dynamic import as a regular component.

`React.lazy` takes a function that must call a dynamic `import()`.

This must return a `Promise`which resolves to a module with a `default`export containing a React Component.

The lazy component should then be rendered inside a `Suspense`component, which allows us to show some fallback content (such as a `loading`indicator) while we are waiting for the lazy component to load.

```jsx
import React, { lazy, Suspense } from 'react';

const ExampleComponent = lazy(() => import('./ExampleComponent'));

function MyComponent() {
  return(
    <Suspense fallback={<div> Loading...</div>}>
      <ExampleComponent />
    </Suspense>
  );
};
```

You can even wrap multiple `lazy`components with a single `Suspense`component.

```jsx
import React, { lazy, Suspense } from 'react';

const ExampleComponent = lazy(() => import('./ExampleComponent'));
const ExampleComponentTwo = lazy(() => import('./ExampleComponentTwo'));

function MyComponent() {
  return(
    <Suspense fallback={<div> Loading...</div>}>
      <Section>
        <ExampleComponent />
        <ExampleComponentTwo />
      </Section>
    </Suspense>
  );
};
```



That's it about `React.memo`, `React.lazy` and `React.suspense`, hope you enjoyed this article 👋😊
