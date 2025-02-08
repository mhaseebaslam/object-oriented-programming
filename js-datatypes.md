# JavaScript Data Types

## Introduction to JavaScript Data Types

JavaScript has several basic types of data called **primitive data types**. These are the simplest types of data that you can use to store values in variables. Understanding these types is essential for working with JavaScript. For more detailed information, refer to the [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

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
- When used in Boolean operations, `null` is considered **falsy**. This means it behaves like `false` in conditions.
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

In JavaScript, the `Number` data type is used to represent both whole numbers (integers) and numbers with decimals (floating-point numbers). Let's break down some important points about numbers in JavaScript:

- JavaScript uses a **64-bit floating-point** format to store numbers. This format is defined by a standard called **IEEE 754**.
- The largest exact integer that JavaScript can safely handle is represented by a special constant called `Number.MAX_SAFE_INTEGER`.

Here is an example of how you can use this constant in your code:

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

### Integer Numbers – Different Bases

In JavaScript, you can write integer numbers in different bases (or number systems). Here are some examples:

- **Decimal (Base 10)**: This is the standard number system we use in everyday life. For example, the number `255` is a decimal number.
- **Hexadecimal (Base 16)**: This system uses digits from 0 to 9 and letters from A to F. For example, the number `0xFF` represents `255` in hexadecimal.
- **Binary (Base 2)**: This system uses only the digits 0 and 1. For example, the number `0b1111` represents `15` in binary.
- **Octal (Base 8)**: This system uses digits from 0 to 7. For example, the number `0o377` represents `255` in octal.

Here is how you can write these numbers in JavaScript:

```js
let decimal = 255;   // Base 10
let hex = 0xFF;      // Hexadecimal (Base 16)
let binary = 0b1111; // Binary (Base 2)
let octal = 0o377;   // Octal (Base 8)
```

### Precision Issue Example

Because JavaScript uses a 64-bit floating-point format, it can sometimes run into precision issues with very large numbers. This means that some large numbers can't be represented exactly, and calculations with these numbers might not be accurate.

Here is an example to illustrate this issue:

```js
const value1 = 9007199254740991 + 1;
const value2 = 9007199254740991 + 2;
console.log(value1 === value2); // true (due to precision loss)
```

In this example, adding `1` and `2` to the largest safe integer (`9007199254740991`) results in the same value due to precision loss. This is why the comparison `value1 === value2` returns `true`, even though we might expect it to return `false`.

---

## Floating Point Numbers

In JavaScript, floating-point numbers are numbers that have a decimal point or are written using exponential notation. These numbers are used to represent real numbers, which include fractions and decimals.

### Examples of Floating-Point Numbers

Here are some examples of how you can write floating-point numbers in JavaScript:

```js
let num1 = 3.14; // A number with a decimal point
let num2 = 1.2e3; // Exponential notation, equivalent to 1200
```

### Floating-Point Precision Issues

One important thing to understand about floating-point numbers is that they can sometimes have precision issues. This means that calculations with floating-point numbers might not always be exact due to the way these numbers are stored in memory.

#### Example of Precision Issue

Let's look at an example to see this in action:

```js
let x = 0.4 - 0.3;
let y = 0.5 - 0.4;
console.log(x, y); // Outputs: 0.10000000000000003 0.1
console.log(x === y); // Outputs: false
```

In this example, you might expect both `x` and `y` to be `0.1`. However, due to precision issues, `x` is actually `0.10000000000000003`, while `y` is `0.1`. As a result, the comparison `x === y` returns `false`.

Understanding these precision issues is important when working with floating-point numbers in JavaScript, as it can help you avoid unexpected results in your calculations.

---

## BigInt

### What is BigInt?

- `BigInt` is a special type in JavaScript used to represent very large integers that are beyond the safe limit of the `Number` type.
- In JavaScript, the `Number` type can only safely represent integers up to `2^53 - 1`. For numbers larger than this, you can use `BigInt`.

### How to Create a BigInt

- You can create a `BigInt` by adding the letter `n` at the end of an integer.

```js
let bigNumber = 1234567890123456789012345678901234567890n;
```

### Examples of BigInt Literals

- Here are some examples of how to write `BigInt` literals in different number systems:

```js
1234n         // Decimal BigInt
0b111111n     // Binary BigInt (prefix with 0b)
0o7777n       // Octal BigInt (prefix with 0o)
0x8000000000000000n // Hexadecimal BigInt (prefix with 0x)
```

### Important Note

⚠ **BigInt cannot be mixed with `Number` in operations**:

- You cannot perform arithmetic operations directly between `BigInt` and `Number` types. Doing so will result in a `TypeError`.

```js
console.log(10n + 5); // TypeError: Cannot mix BigInt and other types
```

- If you need to perform operations between `BigInt` and `Number`, you must convert one type to the other first.

---

## String

A **string** in JavaScript is a sequence of characters used to represent text. Strings are immutable, meaning once they are created, their values cannot be changed. They use **zero-based indexing**, which means the first character of a string is at index 0.

### String Literals

You can create strings using single quotes, double quotes, or backticks:

```js
let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `Hello World`;
```

### String Exercises

1. **Concatenation:**

Concatenation is the process of joining two or more strings together. You can use the `+` operator to concatenate strings.

```js
let firstName = "Muhammad";
let lastName = "Haseeb";
let fullName = firstName + " " + lastName;
console.log(fullName); // Muhammad Haseeb
```

2. **String Length:**

You can find the length of a string using the `.length` property. This property returns the number of characters in the string.

```js
console.log("Hello World".length); // 11
```

3. **String Interpolation:**

String interpolation allows you to embed expressions inside a string. You can use backticks and `${}` to interpolate variables and expressions.

```js
let name = "Haseeb";
console.log(`My name is ${name}`); // My name is Haseeb
```

4. **Substring Extraction:**

You can extract a part of a string using the `.substring()` method. This method takes two arguments: the start index and the end index (not included).

```js
let str = "JavaScript is fun";
console.log(str.substring(11, 13)); // "is"
```

5. **Case Conversion:**

You can convert a string to uppercase or lowercase using the `.toUpperCase()` and `.toLowerCase()` methods.

```js
let mixed = "MiXeD CaSe";
console.log(mixed.toUpperCase()); // "MIXED CASE"
console.log(mixed.toLowerCase()); // "mixed case"
```

6. **String Replacement:**

You can replace a part of a string with another string using the `.replace()` method. This method takes two arguments: the substring to be replaced and the new substring.

```js
let sentence = "I love JavaScript!";
console.log(sentence.replace("JavaScript", "coding")); // "I love coding!"
```

---

## Type Conversions

JavaScript can automatically change the type of a value in a process called **type coercion**. This can sometimes lead to results that you might not expect.

### Example

When you add a number and a string, JavaScript converts the number to a string and then concatenates them.

```js
console.log(44 + " is my shoe size"); // "44 is my shoe size"
```

In this example, the number `44` is converted to the string `"44"`, and then it is combined with the string `" is my shoe size"` to produce the final result.

When you use the multiplication operator with two strings that can be converted to numbers, JavaScript converts the strings to numbers and then multiplies them.

```js
console.log("10" * "2"); // 20
```

Here, both `"10"` and `"2"` are converted to the numbers `10` and `2`, respectively, and then multiplied to get `20`.

### Equality Operators

JavaScript has two types of equality operators: `==` and `===`.

- `==` (double equals) allows type conversion. This means that before comparing, JavaScript will convert the values to the same type if they are not already.
- `===` (triple equals) requires strict type matching. This means that JavaScript will not convert the values and will only return `true` if both the value and the type are the same.

```js
console.log(0 == "0"); // true
```

In this example, `0` (a number) is compared to `"0"` (a string). JavaScript converts the string `"0"` to the number `0` and then compares them, resulting in `true`.

```js
console.log(0 === "0"); // false
```

Here, `0` (a number) is compared to `"0"` (a string) without any type conversion. Since the types are different, the result is `false`.

---

## Summary

| Data Type  | Description |
|------------|-------------|
| Boolean    | Represents a logical value that can be either `true` or `false`. |
| Null       | Represents the intentional absence of any object value. It is used to indicate that a variable should have no value. |
| Undefined  | Indicates that a variable has been declared but has not yet been assigned a value. |
| Number     | Represents both integer and floating-point numbers. It is used for any kind of numeric value. |
| BigInt     | Used for very large integers that are beyond the safe limit of the `Number` type. |
| String     | Represents a sequence of characters used to store and manipulate text. |

This guide provides an overview of JavaScript's primitive data types, including detailed explanations and examples to help you understand how to use them effectively in your code. 🚀
