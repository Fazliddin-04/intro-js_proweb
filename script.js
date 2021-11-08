
// O'yinchi haqida
var name = prompt('"Supper kalla" o`yiniga xush kelibsiz!\nIsmingizni kiring')
var age = +prompt("Yoshingizni ham kiriting")
console.log("O'yinchi: " + name);
console.log("O'yinchi yoshi: " + age + '\n ');

// Misollar

var lvl1 = +prompt('1 + 1 = ?', '2')
var answer1 = 1 + 1
console.log("Level 1:\n 1 + 1 = " + answer1);
if (lvl1 == answer1) {
    console.log("sizning javob To'g'ri: " + lvl1 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl1);
    console.log("To'g'ri javob: " + answer1 + '\n ');
}

alert('Qiyin emasmi?')

var lvl2 = +prompt('8987 + 1013 = ?')
var answer2 = 8987 + 1013
console.log("Level 2:\n 8987 + 1013 = " + answer2);
if (lvl2 == answer2) {
    console.log("sizning javob To'g'ri: " + lvl2 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl2);
    console.log("To'g'ri javob: " + answer2 + '\n ');
}

var lvl3 = +prompt('1234 - 567 = ?')
var answer3 = 1234 - 567
console.log("Level 3:\n 1234 - 567 = " + answer3);
if (lvl3 == answer3) {
    console.log("sizning javob To'g'ri: " + lvl3 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl3);
    console.log("To'g'ri javob: " + answer3 + '\n ');
}

var lvl4 = +prompt('11 * 11 = ?')
var answer4 = 11 * 11
console.log("Level 4:\n 11 * 11 = " + answer4);
if (lvl4 == answer4) {
    console.log("sizning javob To'g'ri: " + lvl4 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl4);
    console.log("To'g'ri javob: " + answer4 + '\n ');
}

var lvl5 = +prompt('144 / 12 = ?')
var answer5 = 144 / 12
console.log("Level 5:\n 144 / 12 = " + answer5);
if (lvl5 == answer5) {
    console.log("sizning javob To'g'ri: " + lvl5 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl5);
    console.log("To'g'ri javob: " + answer5 + '\n ');
}

var lvl6 = +prompt('"619 / 3" bo`lsa, qoldiq nechi qoladi?')
var answer6 = 619 % 3
console.log("Level 6:\n '619 / 3'ning qoldig\`i " + answer6);
if (lvl6 == answer6) {
    console.log("sizning javob To'g'ri: " + lvl6 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl6);
    console.log("To'g'ri javob: " + answer6 + '\n ');
}

var lvl7 = +prompt('2 ning 3-darajasi = ?')
var answer7 = 2 ** 3
console.log("Level 7:\n 2 ning 3-darajasi" + answer7);
if (lvl7 == answer7) {
    console.log("sizning javob To'g'ri: " + lvl7 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl7);
    console.log("To'g'ri javob: " + answer7 + '\n ');
}

var lvl8 = +prompt('x + 3 = 6, x = ?')
var answer8 = 6 - 3
console.log("Level 8:\n x + 3 = 6, x = " + answer8);
if (lvl8 == answer8) {
    console.log("sizning javob To'g'ri: " + lvl8 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl8);
    console.log("To'g'ri javob: " + answer8 + '\n ');
}


var lvl99 = +prompt('1/3 + 5/8 = ?')
var answer99 = (1 / 3) + (5 / 8)
console.log("Level 99:\n 1/3 + 5/8 = " + answer99);
if (lvl99 == answer99) {
    console.log("sizning javob To'g'ri: " + lvl99 + '\n ');
} else {
    console.log("sizning javob Noto'g'ri: " + lvl99);
    console.log("To'g'ri javob: " + answer99 + '\n ');
}

alert('F12 tugmasi bosing va konsol oynasi orqali natijalarni tekshiring')
