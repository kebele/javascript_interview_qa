// let f = function (a, b) {
  
// };

//determine if the function received the number of params it expected
// f(1);
// f(1, 2);
// f(1, 2, 3);

/* 
burada bir func çağırdığımızda; func daki parametrelerin bizim istediğimiz sayıda olup olmadığına bakacağız, yani uygun parametre geliyor mu?
*/
let f = function (a, b) {
    if(arguments.length === f.length){
        console.log('match')
    }else{
        console.log('no match')
    }    
};

f(1);
f(1, 2);
f(1, 2, 3);