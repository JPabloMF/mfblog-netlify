---
template: BlogPost
path: /react/hooks/react-memo-lazy-suspense
date: 2021-03-19T19:32:17.728Z
title: React.memo and React.suspense
metaDescription: 'Learn what is React.memo, React.suspense and React.lazy'
thumbnail: /assets/react.png
---
# React.memo, React.lazy and React.suspense

Today you will learn what is and how to use React.memo, React.suspense and React.lazy

Let's start with React.memo

## React.memo

In a **class component** we use `PureComponent `or `shouldComponentUpdate `to validate if input props are the same.

In a **function component** we can use `React.memo`

![react-memo-example](/assets/reactmemo.png "React.memo example")

## React.lazy and React.suspense

The `React.lazy` hook lets you render a dynamic import as a regular component.

`React.lazy` takes a function that must call a dynamic `import()`.

This must return a `Promise `which resolves to a module with a `default `export containing a React Component.

The lazy component should then be rendered inside a `Suspense `component, which allows us to show some fallback content (such as a `loading `indicator) while we are waiting for the lazy component to load.

![React.-lazy-suspense-example](/assets/reactsupense.png "React.lazy and React.suspense example")

You can even wrap multiple `lazy `components with a single `Suspense `component.

![react-multiple-suspense-example](/assets/reactmultiplesuspense.png "Multiple React.suspense example")

That's it about `React.memo`, `React.lazy` and `React.suspense`, hope you enjoyed this article 👋😊
