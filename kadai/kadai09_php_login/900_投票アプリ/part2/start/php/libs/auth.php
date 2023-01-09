<?php 
namespace lib;
use db\UserQuery;
use JetBrains\PhpStorm\Internal\ReturnTypeContract;
use model\UserModel;
use Throwable;

class Auth{
    public static function login($id,$pwd){
        try{
            if(!(UserModel::validateId($id)
                *UserModel::validatePwd($pwd)
            )){
                return false;
            }
            $is_success = false;
            $user = UserQuery::fetchById($id);
            // var_dump($user);
        
            if(!empty($user) && $user -> del_flg !==1){
                if(password_verify($pwd,$user->pwd)){
                    $is_success = true;
                    UserModel::setSession($user);
                }else{
                    Msg::push(Msg::ERROR, 'パスワードが一致しません');
                }
        
            }else{
                Msg::push(Msg::ERROR, 'ユーザが見つかりません');
            }
        }catch(Throwable $e){
            $is_success = false;
            Msg::push(Msg::DEBUG, $e->getMessage());
            Msg::push(Msg::ERROR, 'ログイン処理でエラーが発生しました...');
        }


        return $is_success;
    }

    public static function regist($user){
        try{
            if(!(
                $user->isvalidId()
                *$user->isvalidPwd()
                *$user->isValidNickname()
                )
                ){
                return false;
            }

            $is_success = false;

            $exsit_user = UserQuery::fetchById($user->id);
    
            if(!empty($exsit_user)){
                Msg::push(Msg::ERROR, 'すでにユーザーが存在しているので､名称をへんこうしてください｡');
                return false;
            }
            $is_success = UserQuery::insert($user);
            if($is_success){
                UserModel::setSession($user);
            }
    
        }catch(Throwable $e){
            $is_success = false;
            Msg::push(Msg::DEBUG, $e->getMessage());
            Msg::push(Msg::ERROR, '登録処理でエラーが発生しました...');
        }
        return $is_success;

    }
    public static function isLogin(){
        try{
            $user = UserModel::getSession();
        }catch(Throwable $e){
            UserModel::clearSession();
            Msg::push(Msg::DEBUG, $e->getMessage());
            Msg::push(Msg::ERROR, 'エラーが発生しました...再度ログインを行ってください');
            return false;
        }

        if(isset($user)){
            return true;
        }else{
            return false;
        }
    }

    public static function logout(){
        try{
            UserModel::clearSession();
        }catch(Throwable $e){
            Msg::push(Msg::DEBUG, $e->getMessage());
            return false;
        }
        return true;
    }
}

?>

