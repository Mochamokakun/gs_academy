<?php 
namespace controller\logout;

use lib\Auth;
use lib\Msg;

function get(){
    if(Auth::logout()){
        Msg::push(Msg::INFO,'ログアウトが成功しました');
    }else{
        Msg::push(Msg::ERROR,'ログアウトが成功しました');
    }
    redirect(GO_HOME);
}
?>