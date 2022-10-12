const posts = [
    { quote: "Make it work, make it right, make it fast.", author: "Obinna"},
    { quote: "It's not a bug; it's an undocumented feature", author: "Duru"}
]
//Async function - this function will return posts to the DOM after 1sec.
function displayPost() {
    setTimeout(() => {
        let container = "";
        posts.forEach(
         post => container += `<li>${post.quote}</li> <p> - Author: ${post.author}</p>`
        );
        document.body.innerHTML = container;
    }, 1000);
}
//Async function - this function will return a post passed into it after 2sec.
//return the value as sync methods. It have to wait for createPost b/f displayPost.
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = false;
            !error ? resolve() : reject();
        }, 2000);
    });
}
// PROMISE Using then and catch
createPost({ quote: "Java is to JavaScript what car is to Carpet", author: "franklin" })
    .then(displayPost)
    .catch(() => alert("Sorry, Can't display the post."));

//  PROMISE Using Async and Await
async function calling() {
    await createPost(
        { quote: "Coding like poetry should be short and concise", author: "franklin" }
        );
    displayPost();
}
calling();

//using async, await and fetch method
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
}