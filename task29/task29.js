const form = document.getElementById('form');
const modal = document.getElementById('modal');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const tel = form.elements.tel.value;

    const result = `<div><h1>Имя: ${name}</h1><h1>Email: ${email}</h1><h1>Tel: ${tel}</h1></div>`;
    modal.innerHTML = result;
    modal.style.display = "flex";
});
