var num = document.getElementById('num')
num.addEventListener("input", () => {
    row_number = num.value
    var odd = 1
    var stars = []
    var to_print = ''
    var final_print = ''
    for (let index = 0; index < row_number; index++) {
        to_print += odd+" "
        stars.push(to_print)
        odd += 2
    }
    stars.forEach(element => {
        final_print += element + "<br>"
    });
    document.getElementById('answers').innerHTML = final_print
})
