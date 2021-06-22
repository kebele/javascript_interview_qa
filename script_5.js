// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

// let a = {
//     a: 123
// }
// [a].forEach(function (x) {
//     console.log(x)
// })

/* 
burada bir noktalı virgül lazım, a object inden sonra, nşa da ; gerekli değildir ancak burada bir object ifadeden hemen sonra [] başlıyor bu normal bir gösterim olabilir yani let a tanımı devam edebilir, js bunu devam ediyor diye anlar ve hata verir, ; bu yüzden js ye bu statement bitti diyor,

*/


let a = {
    a: 123
};
[a].forEach(function (x) {
    console.log(x)
})

// let nesne = { a:123};
// [nesne].forEach()
// {
//     a:123
// }['a']