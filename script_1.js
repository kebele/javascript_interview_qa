console.log('a');
let timmy = setTimeout(function () {
    console.log('b');
}, 1);
let timothy = setTimeout(function () {
    console.log('c');
}, 10);
let timer = setTimeout(function () {
    console.log('d');
}, 0);
console.log('e');

//what is the order of the output of the letters and why?

//a e b d c
/* 
sebebi setTimeout illaki bir zaman gecikmesi demek, b deki zaman 1ms d deki ise 0 bu önemsiz yani orada 1 ms çalışacak sonra sıradan devam edecek, d gecikmesi 0 onu yapacak gecikmesi uzun olan c var onuda sona koyacak 
*/