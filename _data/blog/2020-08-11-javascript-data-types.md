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

## BigInt

In JavaScript, the “number” type cannot represent integer values larger than`(253-1)`(that’s`9007199254740991`), or less than`-(253-1)`for negatives. It’s a technical limitation caused by their internal representation.

Sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

`BigInt`type was recently added to the language to represent integers of arbitrary length.

```javascript
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

## String

A string in JavaScript must be surrounded by quotes.

**In JavaScript, there are 3 types of quotes.**

1. Double quotes:`"Hello"`.
2. Single quotes:`'Hello'`.
3. Backticks:`` `Hello` ``.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in`${…}`, for example:

```javascript
let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3
```

## Boolean

**The boolean type has only two possible values:**

* true
* false

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```
