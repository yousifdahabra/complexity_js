var body = document.getElementsByTagName('body')[0]
body.insertAdjacentHTML('afterbegin', '<section id="main" class="main-section"><div id="answers" class="answers"></div></div>');
var answers = document.getElementById("answers")

row_number = 18
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
stars.push(odd)
var first = true
stars.forEach(element => {
    var space = (max_star - element)//2
    if(first){
        to_print += " ".repeat(space)+'<i class="fa-solid fa-star"></i>'.repeat(element)+" ".repeat(space)+'<br>'
        first = false
    }else{
        to_print += " ".repeat(space)+'<i class="fa-solid fa-star"></i>'+'<span class="wood">|</span>'.repeat(element)+'<i class="fa-solid fa-star"></i>'+" ".repeat(space)+'<br>'
    }
});
console.log(to_print)
document.getElementById('answers').innerHTML = to_print
