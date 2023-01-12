<?php 
namespace controller\topic\archive;

use lib\Auth;
use db\TopicQuery;
use model\UserModel;

function get(){
    Auth::requireLogin();
    $user = UserModel::getSession();

    $topics = TopicQuery::fetchByUserId($user);

    \view\topic\archive\index($topics);
    echo '<pre>',print_r($topics),'</pre>';
}
?>