let num = 0;
async function increment() {
    num += await 2;
    console.log(num);
}
increment();
num += 1;
console.log(num);
/****
 * What is the resulting output?
 *  2, 3 x
 *  1, 3 x
 *  1, 2
 *  2, 1 x
 */

/* 
burada 0 ile işlem başlıyor, async func'a geliyor func içne num ı 0 olarak alıyor ve bekliyorbir anlık sontada num'a yani sıfıra 2 ekliyor yeni num 2 oluyor,
o bekleme esnasında kod devam ediyor ve hemen num'a 1 ekliyor console 1 basıyor o bekleme esnasınd aoluyor bu sonra o bir anlık bekleme bittikten sonra asyn func içindeki 0 a 2 ekleyip console'a 2 basıyor, cevap 1, 2
*/