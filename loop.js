// N - 1, dan 6 gacha juft sonlar chiqorish... 2, 4, 6
for (let j = 0; j <= 6; j++) {
    if (j % 2 != 0) {
        j++;
        console.log(j);
    }
}

// N - 2, 1 dan 10 gacha bulgan toq sonlar chiqorish... 1, 3, 5, 7, 9, 
for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// N - 3, son 4 ga teng bulib qolsa loop tuxtasin... 0, 1, 2, 3, 4 tuxtaydi.
let son = 0;
do {
    if (son === 4)
        break;
    console.log(son);
    son++;
}
while (son <= 10);


// hafta kunlari chiqorish... promptga
let week = +prompt('hafta kunlari')
switch (week) {
    case 1:
        alert('Dushanbi');
        break;
    case 2:
        alert('Seshanbi');
        break;
    case 3:
        alert('Chorshanbi');
        break;
    case 4:
        alert('Payshanbi');
        break;
    case 5:
        alert('Juma');
        break;
    case 6:
        alert('shanbi');
        break;
    case 7:
        alert('yakshanbi');
        break;
    default:
        alert('Bu raqam buyicha hafta kuni yuq.');
}

// //Juft sonlarni chiqaradi; 2, 4, 6
// let juft = 0;
// while(juft <= 6){
//     if(juft % 2 === 0) console.log(juft);
//     juft++;
// }

// //Toq sonlarni chiqaradi; 1, 3, 5, 7, 9
// let toq = 0;
// while(toq <= 10){
//     if(toq % 2 !== 0) console.log(toq);
//     toq++;
// }