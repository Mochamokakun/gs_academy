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
