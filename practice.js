let userArray = prompt("Enter a list of numbers").split("");
function shuffleArray(array) {
    for (let index = array.length - 1; index > 0; index--) {
        let shuffle = Math.floor(Math.random() * index);
        let tempArray = array[index];
        array[index] = array[shuffle];
        array[shuffle] = tempArray;
    }

    return array;
}

console.log(shuffleArray(userArray));