<?php 
namespace lib;

use Throwable;
use Error;

function route($rpath, $method) {
    // throw new ERROR(); ※意図的にエラーを発生させる記述

    try{
        if($rpath === '') {
            $rpath = 'home';
        }
        
        $targetFile = SOURCE_BASE . "controllers/{$rpath}.php";
        
        if(!file_exists($targetFile)) {
            require_once SOURCE_BASE . "views/404.php";
            return;
        }
    
        require_once $targetFile;
    
        $fn = "\\controller\\{$rpath}\\{$method}";
    
        $fn();
    }catch(Throwable $e){
        Msg::push(Msg::DEBUG, $e->getMessage());
        Msg::push(Msg::ERROR, '何かがおかしいようです...');
        require_once SOURCE_BASE . "views/404.php";
    }
}
?>