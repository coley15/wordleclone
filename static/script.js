const keyboard = document.querySelector('.keyboard-container')
const tiles = document.querySelectorAll('.tile')
const tilesArray = Array.from(tiles)
const wordList = ["world", "hello", "apple", "grape", "water", "mouse"];



const randomWord = getRandomWord(wordList);

let currentTile = 0;
let currentRow = 0;


function getRandomWord(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function handle_word_submisson(randomWord) {
    // get the word from the tiles

    const currentRowTiles = tilesArray.slice(currentRow * 5, (currentRow * 5) + 5);

    const userWord = currentRowTiles.map(tile => tile.innerHTML).join('')

    for (let i = 0; i < userWord.length; i++) {

        // lowercase due to the fact that the letters are being represented as uppercase
        let currentLetter = userWord[i].toLowerCase()

        if (currentLetter === randomWord[i]) {
            currentRowTiles[i].classList.add('correct')
        }
        else if (randomWord.includes(currentLetter)) {
            currentRowTiles[i].classList.add('close')
        }
        else {
            currentRowTiles[i].classList.add('wrong')
        }
    
    }

    currentRow++;
    currentTile = 0;

}
function delete_letter() {

    let tileToDelete = currentRow * 5 + currentTile;

    if (currentTile > 0) {
        tiles[tileToDelete - 1].innerHTML = "";
        currentTile--;

        console.log(currentTile)
    }
}
// add an event if any clicks occur on the keyboard
keyboard.addEventListener('click', (event) => {
    // check if user clicks a key and which one
    if (event.target.classList.contains('key')) {
        if (event.target.innerHTML === "Enter") {
            // ensuring that the user is on the final tile of the row
            if (currentTile === 5) {
                handle_word_submisson(randomWord)
            }
        }
        else if (event.target.innerHTML === "Delete") {
            delete_letter();
        }

        else {
            // get the tile index by getting the current row and multiplying it by 5
            // * 5 for each tile in the row then add the current tile
            if (currentTile < 5) {
                const tileIndex = currentRow * 5 + currentTile
                tiles[tileIndex].innerHTML = event.target.innerHTML

                currentTile++;

            }
        }
    }
});



