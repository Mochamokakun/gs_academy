<?php 
namespace controller\login;

use lib\Auth;
use lib\Msg;
use model\UserModel;

// use LDAP\Result;

function get() {
    require_once SOURCE_BASE . 'views/login.php';
}



function post() {
    $id =  get_param('id','');
    $pwd =  get_param('pwd','');

    // Msg::push(Msg::DEBUG,'デバッグメッセージです｡');

    if(Auth::login($id,$pwd)){
        $user = UserModel::getSession();
        Msg::push(Msg::INFO,"{$user->nickname}さん､ようこそいらっしゃました｡");
        redirect(GO_HOME);

    }else{
        redirect(GO_REFERER);
    }
}

