// Tic Tac Toe

const grid = $(".grid-box");

// Game variables
let marker = "X";
let gameState = true;

// Function to check for a win or draw
function checkWinOrDraw(mark){
    const axis = ["column","row","diagonal"]
    const position = [1,2,3];

    axis.forEach(function(currentAxis){
        position.forEach(function(currentPosition){
            const q = `.${currentAxis}-${currentPosition}`;
            if (q !== ".diagonal-3"){
                if ($(q)[0].innerText === $(q)[1].innerText && $(q)[0].innerText === $(q)[2].innerText && $(q)[0].innerText === mark){
                    alert(`${mark} is the winner!!!`);
                    gameState = false;
                }
            }
        });
    })
}

// Input value if game is ongoing
grid.click(function(){
    if (gameState && $(this).text() == ""){
        $(this).children().text(marker);
        marker = marker == "X" ? "O" : "X";
        checkWinOrDraw(marker);
    }
})

// Function to restart game
$(".replay-button").click(function(){
    location.reload();
})