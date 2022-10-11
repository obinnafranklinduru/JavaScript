let arrayOfNumbers = [1, 2, 5, 6, 7, 8, 4, 3, 8, 9];

function shuffle(array) {
    let lengthOfArray = array.length;

    while (lengthOfArray != 0) {
        let randomIndex = Math.floor(Math.random() * lengthOfArray);
        lengthOfArray -= 1;

        let temporaryStorage = array[lengthOfArray];
        array[lengthOfArray] = array[randomIndex];
        array[randomIndex] = temporaryStorage;
    }
    return array;
}

shuffle(arrayOfNumbers)