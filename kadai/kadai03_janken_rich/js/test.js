//演習jQuery
//$→　jQueryを指している
let i =0;
var array=[];
$("#gu_btn").on('click',function(){
    i++;    
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        $("#user_hands").text("グー");
        $("#pc_hands").text("グー");
        $("#judgment").text("引き分け");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } else if (random === 1) {
        $("#user_hands").text("グー");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("負け");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } else if (random === 2) {
        $("#user_hands").text("グー");
        $("#pc_hands").text("パー");
        $("#judgment").text("勝ち");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
        } 
})
$("#cho_btn").on('click',function(){
    i++;
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("グー");
        $("#judgment").text("負け");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } else if (random === 1) {
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("引き分け");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } else if (random === 2) {
        $("#user_hands").text("チョキ");
        $("#pc_hands").text("パー");
        $("#judgment").text("勝ち");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } 
})
$("#par_btn").on('click',function(){
    i++;
    var random = Math.floor(Math.random() * 3);    
    if (random === 0) {
        $("#user_hands").text("パー");
        $("#pc_hands").text("グー");
        $("#judgment").text("勝ち");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } else if (random === 1) {
        $("#user_hands").text("パー");
        $("#pc_hands").text("チョキ");
        $("#judgment").text("負け");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } else if (random === 2) {
        $("#user_hands").text("パー");
        $("#pc_hands").text("パー");
        $("#judgment").text("引き分け");
        array.push({user_hands:$("#user_hands").text(),pc_hands:$("#pc_hands").text(),judgment:$("#judgment").text(),cnt:"1"});
    } 
}) 

$("#result").on('click',function(){
    console.log(array);
    var players =array
    const playerList = document.getElementById("playerList");

    players.forEach((player) => {  // 配列の中のオブジェクトの数だけ処理を繰り返す
    const tr = document.createElement("tr");  
      playerList.appendChild(tr); // 表の中に８個の「tr」（行）ができる
      // 1行の中を生成
      const objArray = Object.entries(player);  // オブジェクトを配列に
      objArray.forEach((arr) => { // No, name, age, gradeの4回繰り返す
        const td = document.createElement("td");
        td.textContent = arr[1];  // arr[1]はvalueの部分
        tr.appendChild(td);
    });
    });
})

$("#reset").on('click',function(){
    localStorage.clear();
    i =0;
    $("#playerList").text("");
    $("#user_hands").text("なに?");
    $("#pc_hands").text("なに?");
    $("#judgment").text("???");

})