
function displaydate() {
    var currentDay = document.getElementById("currentDay")
    setInterval(function () {
        currentDay.textContent = new Date()
    }, 1000)

}

function columns() {
    for (var i = 0; i < 10; i++) {
        var currentHour = new Date().getHours()
        console.log(currentHour)
        var row = document.createElement("div")
        var one = document.createElement("div")
        var two = document.createElement("input")
        var three = document.createElement("div")
    
        row.setAttribute("class", "row")
        one.setAttribute("class","col-2")
        two.setAttribute("class","col-8")
        two.setAttribute("type", "text")
        three.setAttribute("class","col-2")

        if(currentHour > i + 10){
            
        }

        if (i + 10 < 13) {
            one.textContent = i + 10 + "am"
        } else {
            one.textContent = i - 2 + "pm"
        }

        three.textContent = "💾"

        row.appendChild(one)
        row.appendChild(two)
        row.appendChild(three)
        document.querySelector(".container").appendChild(row)
    }

}








function init() {
    displaydate()
    columns()
}
init()