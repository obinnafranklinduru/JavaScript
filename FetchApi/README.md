# Fetch API

When we used the fetch API previously, we chained a couple of promises together, but when we start chaining a lot of different promises together, it can get a little messy.

We can use async and await to group all of our asynchronous code into a single asynchronous function, and then use the await keyword inside to chain promises together in a much more logical and readable way.

Note that whenever we call an asynchronous function, it returns a promise. When we called the function like this: storage() in the code below, we were not getting the data directly because async functions return a promise. To get the data, we must call the then() method once, like this: storage().then().