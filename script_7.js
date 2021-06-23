// solve the problem occuring in the second closure example

//simple closure

function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}

// closure with a problem

function f2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);
    }
}

/* 
burada f1() sıkıntısız çalışıyor, f2 ise çıktı olarak sadece 3 veriyor oysa istediğimiz şey bir loop şeklinde çalışması ve her loop ta sonuç vermesi 0,1,2 şeklinde,

problemi çözmek için öncelikle var'ı let ile değiştirelim, çünkü var hem globl hemde local scope da değ. tanımlar, let ise localde tanımlamaya izin verir, 
*/

function f3() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);
    }

}

// veya

function f4() {
    for (var i = 0; i < 3; i++) {
        setTimeout( (function (x) {
            console.log(x)
        }).bind(this, i), 1000 * i);
    }

}
// f3()
f4()