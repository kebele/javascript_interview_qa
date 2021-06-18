//revealing module pattern
//Turn this object literal into a module that only exposes the render method

// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// };


/* 
burada verilen yapıyı bir module çevirmemiz isteniyor ve sadece içindeki render() dışarı çıksın isteniyor,
burada iife var, immediate invoke function expression yani hemen çalıştırılan func, bunu herhaqngibir yerden çağırma, çalıştırma gibi bir durum yok, hemen çalışan bir func. ve global scope un dışında

(function(params) {
    
})()


*/

let myModule = (function () {
    let _data= []
    let _render= function () {
        //click listeners for _add or _remove
    }
    let _add = function() {
        _data.push('abcd')
    }
    let _remove = function() {
        _data.pop()
    }
    return {
        render : _render
        /* burada return içine bu şekilde hangi func eklersek ona dışarıdan erişilebilir ve/veya o dönebilir, mesela add : _add  dersek dıraşırdan add() erişilebilir, yoksa sadece içeride çalışır*/
    }
})();

myModule.render() // normal çıktısı çalışır
myModule._data // çalışmaz
myModule.add() // çalışmaz