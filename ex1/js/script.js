var num = document.getElementById('num')
num.addEventListener("input", () => {
    row_number = num.value
    var odd = 1
    var max_star = 0
    var stars = []
    var max_star = 0
    var to_print = ''
    for (let index = 0; index < row_number; index++) {
        stars.push(odd)
        odd += 2
    }
    max_star = odd
    for (let index = 0; index < row_number; index++) {
        stars.push(odd)
        odd -= 2
    }
    stars.push(odd)
    stars.forEach(element => {
        var space = (max_star - element)//2
        to_print += " ".repeat(space)+'*'.repeat(element)+" ".repeat(space)+'<br>'
    });
    console.log(to_print)
    document.getElementById('answers').innerHTML = to_print
})
