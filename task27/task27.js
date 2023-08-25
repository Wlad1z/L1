const buttons = document.querySelectorAll('button');
//увеличиваем
function increaseElement(){
    const red = document.getElementById('red');
    red.style.left = "200px";
    red.style.width = "400px";
    red.style.height = "400px";
}
//уменьшаем
function reduceElement(){
    const red = document.getElementById('red');
    red.style.left = "0px";
    red.style.width = "200px";
    red.style.height = "200px";
}
//прячем соответствующие кнопки
buttons.forEach(target => {
    target.addEventListener("click", () => {
        buttons[0].classList.toggle('hide');
        buttons[1].classList.toggle('hide');
    });
});