---
template: BlogPost
path: /javascript/data-types
date: 2020-08-11T02:09:56.748Z
title: JavaScript Data types
metaDescription: javascript data types
thumbnail: /assets/js.png
---
# Data types

In this post, you will learn about every data type that JavaScript has.

**We have 7 data types in JavaScript:**

1. Number
2. BigInt
3. String
4. Boolean
5. null
6. undefined
7. Object
8. Symbols

## Number

The number type represents both integer and floating-point numbers (decimals).

```javascript
let number = 34
let decimal = 34.00
```

**We have 2 special numeric values:**

1. Infinity
2. NaN

* **Infinity:**

  It represents the mathematical Infinity ∞.
* **NaN:**

  It represents a computational error. It is a result of an incorrect or an undefined mathematical operation:

```javascript
console.log("not a number" / 2); // NaN
// the result is not a number because We divided a string by a number
```
