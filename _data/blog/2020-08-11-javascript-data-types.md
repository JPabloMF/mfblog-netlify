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

## Primitive values

**Primitive values are:**

1. Number
2. BigInt
3. String
4. Boolean
5. null
6. undefined
7. Symbol

Because their values can contain only a single thing (be it a string or a number or whatever).

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

In JavaScript, the “number” type cannot represent integer values larger than`(2^53-1)`(that’s`9007199254740991`), or less than`-(2^53-1)`for negatives. It’s a technical limitation caused by their internal representation.

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

Boolean values also come as a result of comparisons:

```javascript
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")
```

## null

In JavaScript,`null` is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value that represents “nothing”, “empty” or “value unknown”.

```javascript
let age = null;
```

The code above states that `age` is unknown.

## undefined

The meaning of `undefined` is “value is not assigned”.

If a variable is declared, but not assigned, then its value is `undefined`:

```javascript
let age;
console.log(age); // shows "undefined"
```

## Objects

Basically, an Object is a collection of data

We need to have in mind the following structure for each object that You create:

```javascript
{key: value}
```

So We have to close our data in keys `{}`

Then we have a `key`, there you can use any name that you want, for example, age, name, gender, etc.

And for each `key`, you have to define`value`using any of the **primitive values.**

**Example:**

```javascript
{name: 'Shaun', lastName: 'Jhonson', age: 54}
```

**Symbol**

The `Symbol()`function returns a value of type **symbol**, has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class, but is incomplete as a constructor because it does not support the syntax "`new Symbol()`"

To create a new primitive symbol, you write`Symbol()`with an optional string as its description:

```javascript
let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')
```

The above code creates three new symbols. Note that`Symbol("foo")`does not coerce the string`"foo"`into a symbol. It creates a new symbol each time:

```javascript
Symbol('foo') === Symbol('foo')  // false
```

The following syntax with the `new`operator will throw a `TypeError`:

```javascript
let sym = new Symbol()  // TypeError
```

And that's it for this post

For more references review these links:

<https://javascript.info/types>

<https://www.w3schools.com/js/js_datatypes.asp>

<https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures>
