<?PHP
    require('dbconnect.php');
    
    $id= filter_input(INPUT_GET,'id', FILTER_SANITIZE_NUMBER_INT);
    $stmt = $db->prepare('select * from memos where id=?');
    if(!$stmt){
        die($db->error);
    }
    $stmt->bind_param('i',$id);
    $result = $stmt->execute();
    if(!$result){
        die('memoの指定が正しくありません');
    }

    $stmt->bind_result($id,$memo,$created);
    $stmt->fetch();

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>memoの編集</title>
</head>
<body>
    <form action="update_do.php" method="post">
        <input type="hidden" name="id" value =" <?PHP echo $id; ?>">
        <textarea name="memo" id="memo" cols="50" rows="10" placeholder="memoを入力したください｡"><?PHP echo htmlspecialchars($memo); ?></textarea>
        <br>
        <button type="submit">編集する</button>
    </form>
    
</body>
</html>