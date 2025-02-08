# JavaScript Data Types

## Introduction to JavaScript Data Types

JavaScript has several basic types of data called **primitive data types**. These are the simplest types of data that you can use to store values in variables. Understanding these types is essential for working with JavaScript. For more detailed information, you can refer to the [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

### Types of Primitive Data Types

1. **Boolean**: Represents a logical entity and can have two values: `true` or `false`.
2. **Null**: Represents the intentional absence of any object value. It is one of JavaScript's primitive values.
3. **Undefined**: Indicates that a variable has not been assigned a value.
4. **Number**: Represents both integer and floating-point numbers.
5. **BigInt**: Used for integers that are too large to be represented by the `Number` type.
6. **String**: Represents a sequence of characters used to represent text.

### Checking Data Types

You can use the `typeof` operator to find out the type of a variable. This operator returns a string indicating the type of the unevaluated operand.

Here are some examples:

```js
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof 1234567890123456789012345678901234567890n); // "bigint"
```

By using the `typeof` operator, you can easily check and understand the type of data you are working with in your JavaScript code.

---

## Boolean

A **Boolean** is a simple data type that can only have one of two values: `true` or `false`.

### Common Use Cases

Booleans are commonly used in programming to control the flow of a program. They are often used in:

- **Conditional statements**: To decide which code should run based on certain conditions.
- **Loops**: To determine how many times a loop should execute.

### Falsy Values

In JavaScript, some values are considered "falsy," meaning they are treated as `false` when evaluated in a Boolean context. Here are the falsy values:

```js
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
```

### Truthy Values

All other values in JavaScript are considered "truthy," meaning they are treated as `true` when evaluated in a Boolean context. This includes:

- Non-empty strings (e.g., `"hello"`)
- Numbers other than `0` and `-0` (e.g., `1`, `-1`)
- Objects and arrays (even if they are empty)

Understanding how Booleans work and how JavaScript evaluates truthy and falsy values is crucial for writing effective and bug-free code.

---

## Null

- The `null` type in JavaScript has only one value, which is `null`.
- It is used to represent the **absence of any value** or **no value at all**.
- When used in boolean operations, `null` is considered **falsy**. This means it behaves like `false` in conditions.
- There is a known quirk in JavaScript: when you use `typeof` to check the type of `null`, it returns **"object"** instead of `null`. This is a historical bug in JavaScript that has never been fixed.

Here is an example:

```js
console.log(typeof null); // "object"
```

---

## Undefined

- When you create a variable but do not give it a value, it is `undefined`. This means the variable exists but has no value yet.
- `null` and `undefined` are considered equal when using the loose equality operator (`==`), but they are not equal when using the strict equality operator (`===`).

Here is an example in JavaScript:

```js
let x;
console.log(x); // This will print 'undefined' because 'x' has no value.

console.log(undefined == null); // This will print 'true' because 'undefined' and 'null' are loosely equal.

console.log(undefined === null); // This will print 'false' because 'undefined' and 'null' are not strictly equal.
```

---

## Number

- Used to represent **integers** and **floating-point numbers**.
- Internally, JavaScript uses **64-bit floating-point** format (IEEE 754).
- The largest exact integer is `Number.MAX_SAFE_INTEGER`.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

### Integer Numbers – Different Bases

```js
let decimal = 255;   // Base 10
let hex = 0xFF;      // Hexadecimal (Base 16)
let binary = 0b1111; // Binary (Base 2)
let octal = 0o377;   // Octal (Base 8)
```

### Precision Issue Example

```js
const value1 = 9007199254740991 + 1;
const value2 = 9007199254740991 + 2;
console.log(value1 === value2); // true (due to precision loss)
```

---

## Floating Point Numbers

Floating-point literals can include a **decimal point** or use **exponential notation**:

```js
let num1 = 3.14;
let num2 = 1.2e3; // 1200
```

### Floating Point Precision Issue Example

```js
let x = 0.4 - 0.3;
let y = 0.5 - 0.4;
console.log(x, y); // 0.10000000000000003 0.1
console.log(x === y); // false
```

---

## BigInt

- `BigInt` is used for arbitrarily large integers.
- A `BigInt` is created by adding `n` at the end of an integer.

```js
let bigNumber = 1234567890123456789012345678901234567890n;
```

### BigInt Literal Examples

```js
1234n         // BigInt literal
0b111111n     // Binary BigInt
0o7777n       // Octal BigInt
0x8000000000000000n // Hexadecimal BigInt
```

⚠ **BigInt cannot be mixed with `Number` in operations**:

```js
console.log(10n + 5); // TypeError
```

---

## String

- A **string** is an immutable sequence of 16-bit Unicode characters.
- Strings use **zero-based indexing**.

### String Literals

```js
let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `Hello World`;
```

### String Exercises

1. **Concatenation:**

```js
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // John Doe
```

2. **String Length:**

```js
console.log("Hello World".length); // 11
```

3. **String Interpolation:**

```js
let name = "Max";
console.log(`My name is ${name}`); // My name is Max
```

4. **Substring Extraction:**

```js
let str = "JavaScript is fun";
console.log(str.substring(11, 13)); // "is"
```

5. **Case Conversion:**

```js
let mixed = "MiXeD CaSe";
console.log(mixed.toUpperCase()); // "MIXED CASE"
console.log(mixed.toLowerCase()); // "mixed case"
```

6. **String Replacement:**

```js
let sentence = "I love JavaScript!";
console.log(sentence.replace("JavaScript", "coding")); // "I love coding!"
```

---

## Type Conversions

JavaScript performs implicit **type coercion**, sometimes leading to unexpected results.

### Example

```js
console.log(44 + " is my shoe size"); // "44 is my shoe size"
console.log("10" * "2"); // 20
```

### Equality Operators

- `==` allows type conversion.
- `===` requires strict type matching.

```js
console.log(0 == "0"); // true
console.log(0 === "0"); // false
```

---

## Summary

| Data Type  | Description |
|------------|-------------|
| Boolean    | `true` or `false` |
| Null       | Represents absence of value |
| Undefined  | A variable with no assigned value |
| Number     | Integers & floating points |
| BigInt     | Large integer numbers |
| String     | Sequence of characters |

This guide covers JavaScript's primitive data types with examples and best practices. 🚀
