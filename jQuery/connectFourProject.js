var player1Name = prompt('Player one (blue pieces), what is your name?');
var player2Name = prompt('Player two (red pieces), what is your name?');
var currentPlayer = 1;
var colors = [null, 'blue', 'red']
var lowestRows = [5, 5, 5, 5, 5, 5, 5];
var table = $('table tr');

function fillCircle() {
    // First we check which column the player clicked
    var clickedCol = $(this).closest("td").index();

    // If the column isn't full, we change the lowest available space's color and then go on to check whether this results in a win for the player
    if (lowestRows[clickedCol] >= 0) {
        // First we get rid of any warnings below the game
        $('#Warning').text('')

        // Now we get the lowest row available in this column to change that space's color:
        var rowIndex = lowestRows[clickedCol];
        lowestRows[clickedCol] -= 1; // this logs which row is next to be taken in that column

        if (currentPlayer == 1){
            // If it's player one's turn, we color the space blue
            table.eq(rowIndex).find('td').eq(clickedCol).find('button').css('background-color',colors[1]);
        } else {
            // If it's player two's turn, we color the space red
            table.eq(rowIndex).find('td').eq(clickedCol).find('button').css('background-color',colors[2]);
        }
        
    } else {
        // If the column is full, we warn the current player that it is full and to click another column instead!
        $('#Warning').text('That column is full, try another column!')
    }
}

function resetBoard() {

}

$('.board button').click(fillCircle) // This listener is used to fill a space when a column is clicked and subsequently find out if that player won

$('#Reset').click(resetBoard) // This listener is used to reset the board when the appropriate button is clicked


// $('.board button').on('click',function(){
//   // This is the Column Number (starts at zero):
//   console.log('This is the Column:');
//   console.log($(this).closest("td").index());
//   // This is the Row Number:
//   console.log("This is the Row:");
//   console.log($(this).closest("tr").index());
//   console.log('\n');
//   // This is a way to grab a particular cell (replace):
//   // $('table').eq(rowIndex).find('td').eq(colIndex)
// });