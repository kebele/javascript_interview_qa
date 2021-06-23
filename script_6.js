
/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 */

//  let obj = (function () {
//     let objInstance; //private variable
//     function create() { //private function to create methods and properties

//     }
//     return {

//     };
// })();

//let obj1 = obj.getInstance();
// let obj2 = obj.getInstance();

/* 
singleton tek nesne tasarım kalıbıdır, 
her nesne hafızada yer kaplar, bazı nesneleri her kullanım esnasında yeniden oluşturmaya gerek yoktur, mesela db connection yapacak bir nesnemiz var diyelim, her db bağlantısında bu nesneyi db bağlantısı yapacak func. yeniden oluşturmak ister, bu durumda bu yeniden oluşmasın var olan nesne üzerinden devam etsin, yoksa her baglantıda oluşturulan nesneler ciddi yer akplar...

aşağıda iife kalıbında bir func var, bu dışarıya getInstance() func. dönecek, yani hemen çalışacak bir func tanımladık, içindebir değişken var ( objInstance) ve bir func dönecek create() ilk çalıştığından bu iife create calışacak ve bir instance oluşturacak ikinci çalışmasında yeni oluşturmayacak öncekinden devam edecek

_isRunning değ. false dedik 
start _isRunnig i true yapıyor
stop false yapıyor,
currentState ise _isRunning in o anki durumunu veriyor
bu iife dışarıya start, stop ve currentState i dönüyor, yani bu 3'ünede dışardan erişebiliyoruz,
bu durumda eğer _isRunning false ise create çalışacak ve isRunning i true yapacak, 
bir dışarıdaki iife de dışarıya getInstance() dönüyor, objInstance false ise cretae ile oluşturacak, true ise oluşturmayacak (yani create() çalışmayacak) 
*/


let obj = (function () {
    let objInstance; //private variable
    function create() { //private function to create methods and properties
        let _isRunning = false

        let start = function () {
            _isRunning = true
        }
        let stop = function () {
            _isRunning = false
        }
        let currentState = function () {
            return _isRunning
        }
        return {
            start : start,
            stop : stop,
            currentState : currentState
        }
    }
    return {
        getInstance : function () {
            if(!objInstance){
                objInstance = create()
            }
            return objInstance
        }
    };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

console.log(obj1.currentState()) // false
console.log(obj2.currentState()) // false

obj1.start()
//bununla create çalışacak ve instance oluşacak, yeni oluşturmaya gerek olmayacak
console.log(obj1.currentState()) // true
console.log(obj2.currentState()) //true