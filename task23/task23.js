const passwordInput = document.getElementById('passwordInput');
const passwordStrengthSpan = document.getElementById('passwordStrength');
let correctPas = false;

//выводим подсказку о сложности пароля
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const strength = assessPasswordStrength(password);
    passwordStrengthSpan.textContent = strength;
    if(correctPas && password.length < 10){
        passwordStrengthSpan.textContent += " Слабый пароль, добавьте ещё символы.";
    } else if (correctPas && password.length < 15){
        passwordStrengthSpan.textContent += " Средний пароль, вы можете добавить ещё символы.";
    } else if (correctPas && password.length >= 15) {
        passwordStrengthSpan.textContent += " Сильный пароль. ";
    }
});

function assessPasswordStrength(password) {
    //проверяем заполненно ли поле
    if (!password) {
        correctPas = false;
        return '';
    }

    let strength = '';
    //проверка на латинсике буквы, регистры, цифры и симолвы
    if (!/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\-]+$/.test(password)) {
        strength += ' (должен состоять только из английских букв, цифр и специальных символов)';
    } else if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password)) {
        strength = ' (Пароль должен содержать больше 8 символов и должен содержать буквы в разных регистрах, цифры и специальные символы)';
    } else {
        correctPas = true;
    }


    return strength;
}





