var reset = document.querySelector('#resetBtn')

var cells = document.querySelectorAll('td')

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (this.textContent == "") {
            this.textContent = "X";
        } else if (this.textContent == "X") {
            this.textContent = "O";
        } else {
            this.textContent = "";
        }
    })
}

reset.addEventListener('click', function(){
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
})