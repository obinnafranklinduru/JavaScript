I'm practicing with Vanilla JavaScript and learning Promise. This is what I figured out today:

A Promise is an object that encapsulates the result of an asynchronous operation. In other words, it returns an asynchronous method value like synchronous methods.

Promise accepts a callback function with two parameters: "resolve" and "reject".

resolve - It is invoked when asynchronous code is successful.

reject - It is invoked when asynchronous code has failed.

Synchronous methods: these are codes that run step by step. In an ordered sequence (start now, finish now).

Code Example:

    `console.log("Display first");

    console.log("Display second");

    console.log("Display last");`

Asynchronous methods: Out of sequence. example, to access a database, fetch a file (start now, finish sometime later)

Code Example:

`   setTimeout ((() => console.log("Display third")), 2000);

    console.log("Display first");

    setTimeout ((() => console.log("Display last")), 5000);

    console.log("Display second");`

The setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. It accepts either a callback function, an arrow function, or a function expression.

catch () - helps in error handling.

then () method then returns a promise.

await operator is used to wait for a promise and get its fulfillment value. It can only be used inside of an async function.

fetch() method in JavaScript is used to make a request to the server and load the information on the webpages.