<?php
/* htmlspecialcharsを関数化 */
function h($value){
    return  htmlspecialchars($value,ENT_QUOTES);
} 

/*DBへの接続の共通化 */
function dbconnect(){
    $db = new mysqli('localhost:3306','root','root','min_bbs');
    if(!$db){
        die($db->error);
    }
    return $db;
}


?>

