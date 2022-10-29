// const list = ["a","b","c"];
// list.unshift("*");
// list.push("*")
// console.log(list);
// console.log(list[1]);

// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i+=1;
// console.log(i);
// i+=10;
// console.log(i);

// let str="";
// for(let i=0; i<10;i++){
//     str += `ループ: ${i} 回目<br>`;
//     console.log(str)
// }
// $("#view").html(str);

// let array=["a","b","c","d","e","f","g","h","i","j"]
// let str="";

// // for(let i=0; i<10;i++){
// for(let i=0; i<array.length;i++){
//     str += `配列:${array[i]}<br>`;
//     console.log(str)
// }
// $("#view").html(str)

// let str ="";

// for(let i = 2011; i<2099;i++){
//     str +=`<option>${i}</option>`;
// }
// $("#date").html(str)

const qs = [
    "通るときには閉まって、通らないときには開いているものは何?",
    "話すことがとても好きな道具は何?",
    "世界の真ん中にいる虫は何?",
    "通るときには閉まって、通らないときには開いているものは何?",
    "話すことがとても好きな道具は何?",
    "世界の真ん中にいる虫は何?"
]; 

//回答選択肢[多重配列]  
const toi = [
    [ "踏み切り", "洗濯機", "冷蔵庫" ], 
    [ "スプーン", "シャベル", "しゃもじ" ],
    [ "てんとう虫", "カマキリ", "蚊" ],
    [ "踏み切り", "洗濯機", "冷蔵庫" ], 
    [ "スプーン", "シャベル", "しゃもじ" ],
    [ "てんとう虫", "カマキリ", "蚊" ]
]; 
//答え[配列]
const ans=[ 1, 2, 3 ];


//1.最初の問題文＆回答選択肢＆回答値を設定
let i=0;
$("#header").html("ただいま" +(i+1) + "問目");
$("#quest").html(qs[i]);

$("#toi1").html(toi[i][0]);
$("#toi2").html(toi[i][1]);
$("#toi3").html(toi[i][2]);

//2.ラジオボタンをクリックしたらイベント発生！(クリックイベント)
$('[name=toi]').on("click",function(){
    if($(this).val()== ans[i]){
        alert("正解");
    }else{
        alert("不正解");
    }
    
    i++;

    if(i >=6){
        i=0;
        $("#header").html("ただいま" +(i+1) + "問目");
        $("#quest").html(qs[i]);    
        $("#toi1").html(toi[i][0]);
        $("#toi2").html(toi[i][1]);
        $("#toi3").html(toi[i][2]);
    }else{
        $("#header").html("ただいま" +(i+1) + "問目");
        $("#quest").html(qs[i]);    
        $("#toi1").html(toi[i][0]);
        $("#toi2").html(toi[i][1]);
        $("#toi3").html(toi[i][2]);
    }


});