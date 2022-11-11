
//メモ領域
//1.Save クリックイベント
$("#save").on("click", function(){
    let key = $("#key").val();
    let memo = $("#memo").val();
    console.log(key,"データ確認");
    console.log(memo,"データ確認");

    localStorage.setItem(key,memo);
    const html = 
        `
            <tr>
                <th>${key}</th>
                <td>${memo}</td>
            </tr>
        `;
    $("#memo_list").append(html);
});

//2.clear クリックイベント
$("#clear").on("click",function(){
    localStorage.clear();
    $("#memo_list").empty();
});

//3.ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const html = `
        <tr>                
            <th>${key}</th>
            <td>${value}</td>
        </tr>
    `;
    $("#memo_list").append(html);
}

//リスト
//1.Save クリックイベント
$("#document_save").on("click", function(){
    let title = $("#title").val();
    let document = $("#document").val();
    console.log(title,"データ確認");
    console.log(document,"データ確認");
    localStorage.setItem(title,document);

    const html = 
        `
        <li>${title}</li>     
        `
    ;
    $("#document_list").append(html);
});

//2.clear クリックイベント
$("#document_clear").on("click",function(){
    localStorage.clear();
    $("#document_list").empty();
});

