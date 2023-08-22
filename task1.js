// с помощью reverse
function isPalindrom (string){
    //удаляем пробелы
    let simpleString = string.split(' ').join('');
    // переисываем строку в обратную сторону
    let reverseString = simpleString.split('').reverse().join('');
    if(simpleString === reverseString){
        return string + "- это палиндром";
    } else {
        return string + "- это не палиндром"
    }
} 

// с помощью цикла
function isPalindrom1 (string){
    let simpleString = string.split(' ').join('');
    // переисываем строку в обратную сторону
    let reverseString = '';
    for (let i = simpleString.length - 1; i >= 0; i--) {
        reverseString += simpleString[i];
    }
    if(simpleString === reverseString){
        return string + "- это палиндром";
    } else {
        return string + "- это не палиндром"
    }
}



createSimpleElement('Задание 1', (isPalindrom ("аргентина манит негра")+"<br>"+isPalindrom1 ("мяч мяч")));