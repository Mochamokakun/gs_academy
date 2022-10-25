//　一番最初にやってほしいこと
//alert(1111);

//演習1
console.log("初めてのJavaスクリプト");

//演習2
console.log(23+5);
console.log(2000-1800);
console.log("18+5");

// 変数宣言
var test="就職キャンプ太郎"
console.log(test);

// if文　条件分岐
var point = 70;

if(point >= 80) {
    console.log("素晴らしいおめでとう");
} else {
    console.log("もっと頑張りましょう");
}

var random = Math.floor(Math.random()*5)
console.log(random,"ランダムな数字")



//演習jQuery
//$→　jQueryを指している
$(".a").on('click',function(){
    var random = Math.floor(Math.random() * 5);
    console.log(random, "ランダムな数字");
    
    if (random === 0) {
        console.log("大吉");
        $(".a").text("大吉");
    } else if (random === 1) {
        console.log("中吉");
        $(".a").text("中吉");
    } else if (random === 2) {
        console.log("小吉");
        $(".a").text("小吉");
    } else if (random === 3) {
        console.log("吉");
        $(".a").text("吉");
    } else if (random === 4) {
        console.log("末");
        $(".a").text("末");
    }
}) 
