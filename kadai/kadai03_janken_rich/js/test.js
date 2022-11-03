//演習jQuery
//$→　jQueryを指している
let i =0;

$("#gu_btn").on('click',function(){
    i++;    
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        $("#user_hands").text("グー");
        $("#pc_hands").text("グー");
        $("#judgment").text("引き分け");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));

    } else if (random === 1) {
        $("#user_hands").text("グー");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("負け");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } else if (random === 2) {
        $("#user_hands").text("グー");
        $("#pc_hands").text("パー");
        $("#judgment").text("勝ち");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
        } 
})
$("#cho_btn").on('click',function(){
    i++;
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("グー");
        $("#judgment").text("負け");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } else if (random === 1) {
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("引き分け");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } else if (random === 2) {
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("パー");
        $("#judgment").text("勝ち");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } 
})
$("#par_btn").on('click',function(){
    i++;
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        $("#user_hands").text("パー");
        $("#pc_hands").text("グー");
        $("#judgment").text("勝ち");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } else if (random === 1) {
        $("#user_hands").text("パー");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("負け");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } else if (random === 2) {
        $("#user_hands").text("パー");
        $("#pc_hands").text("パー");
        $("#judgment").text("引き分け");
        var array = [{user_hands:$("#user_hands").text()},{pc_hands:$("#pc_hands").text()},{judgment:$("#judgment").text()},{cnt:"1"}];
        localStorage.setItem(i,JSON.stringify(array));
    } 
}) 

$("#result").on('click',function(){
    var pivot_array=[];
    for(let n =0; n<localStorage.length; n++){
        let key = localStorage.key(n);
        var array_result = JSON.parse(localStorage.getItem(key));
        pivot_array.push(array_result);
    }
    $('#get_data').append(pivot_array);
    console.log(pivot_array);
})

$("#reset").on('click',function(){
    localStorage.clear();
    i =0;
    $("#user_hands").text("なに?");
    $("#pc_hands").text("なに?");
    $("#judgment").text("???");

})