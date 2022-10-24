//演習jQuery
//$→　jQueryを指している
$("#gu_btn").on('click',function(){
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        console.log("グー");
        $("#user_hands").text("グー");
        $("#pc_hands").text("グー");
        $("#judgment").text("引き分け");
    } else if (random === 1) {
        console.log("チョキ");
        $("#user_hands").text("グー");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("負け");
    } else if (random === 2) {
        console.log("パー");
        $("#user_hands").text("グー");
        $("#pc_hands").text("パー");
        $("#judgment").text("勝ち");
    } 
})
$("#cho_btn").on('click',function(){
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        console.log("グー");
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("グー");
        $("#judgment").text("負け");
    } else if (random === 1) {
        console.log("チョキ");
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("引き分け");
    } else if (random === 2) {
        console.log("パー");
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("パー");
        $("#judgment").text("勝ち");
    } 
})
$("#par_btn").on('click',function(){
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        console.log("グー");
        $("#user_hands").text("パー");
        $("#pc_hands").text("グー");
        $("#judgment").text("勝ち");
    } else if (random === 1) {
        console.log("チョキ");
        $("#user_hands").text("パー");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("負け");
    } else if (random === 2) {
        console.log("パー");
        $("#user_hands").text("パー");
        $("#pc_hands").text("パー");
        $("#judgment").text("引き分け");
    } 
}) 
