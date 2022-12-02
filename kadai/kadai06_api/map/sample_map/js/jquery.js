//****************************************
//成功関数
//****************************************
let map;

function mapsInit(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    map = new Microsoft.Maps.Map('#myMap', {
            center: new Microsoft.Maps.Location(lat, lon), 
            mapTypeId: Microsoft.Maps.MapTypeId.load, 
            zoom: 15 
        });
    pushpin(lat,lon,map);

    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        directionsManager.setRenderOptions({itineraryContainer:'#directionsItinerary'});
        directionsManager.showInputPanel('directionsPanel');
    });
};
function pushpin(la,lo,now){
    let location = new Microsoft.Maps.Location(la,lo)
    let pin = new Microsoft.Maps.Pushpin(location, {
    color: 'red',            
    draggable:false,          
    enableHoverStyle:true,   
    visible:true             
    });
    now.entities.push(pin);
};


//****************************************
//失敗関数
//****************************************
function mapsError(error) {
    let e = "";
    if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
    e = "位置情報が許可されてません";
    }
    if (error.code == 2) { //2＝現在地を特定できない
    e = "現在位置を特定できません";
    }
    if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
    e = "位置情報を取得する前にタイムアウトになりました";
    }
    alert("エラー：" + e);
};

//****************************************
//オプション設定
//****************************************
const set = {
  enableHighAccuracy: true, //より高精度な位置を求める
  maximumAge: 20000, //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
  timeout: 10000 //10秒以内に現在地情報を取得できなければ、処理を終了
};


//最初に実行する関数
function GetMap() {
    navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
};

//****************************************
//ルート検索APIを入れる
//****************************************
