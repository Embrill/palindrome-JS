// Palindrome 1.0

// Примеры
palindrome('racecar'); // true
palindrome('table'); // false
palindrome('Анна'); // true
palindrome('А роза упала на лапу Азора'); // true

function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join(''); // split - разбивщик на массивы по заданному разделителю / reverse - j,обратный порядок элементов массива / join - объеденить массив в строку с указанным разделителем 
}

// Palindrome 1.2
function palindrome2(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }

    return true;
}

console.log(palindrome2('А роза упала на лапу Азора'));