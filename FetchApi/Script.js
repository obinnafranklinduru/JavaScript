// Using async / await to fetch request

const storage = async () => {
    // Creating a fetch request to https://jsonplaceholder.typicode.com/
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    if (response.readyState !== 4 && response.status !== 200) {
        throw new Error("not defined");
    }

    return data;
}
storage().then(data => console.log("resolved:", data))
        .catch(error => console.log("rejected:", error.message));

//===========================OR===============================

    // Creating a fetch request to https://jsonplaceholder.typicode.com/
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    // This will format the data into JSON format.
    .then(response => response.json())
        
    // This will take the data and display it on the console.
    .then(data => console.log("resolved:", data))

    .catch(error => console.log("rejected:", error.message));