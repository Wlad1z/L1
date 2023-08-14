// с помощью reverse
function isPalindrom (string){
    //удаляем пробелы
    string = string.split(' ').join('');
    // переисываем строку в обратную сторону
    let reverseString = string.split('').reverse().join('');
    console.log(string === reverseString);
}

// с помощью цикла
function isPalindrom1 (string){
    string = string.split(' ').join('');
    // переисываем строку в обратную сторону
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    console.log(string === reverseString);
}


// isPalindrom ("аргентина манит негра");
// isPalindrom1 ("аргентина манит негра");