<?php
    require('dbconnect.php');

    $counts = $db->query('select count(*) as cnt from memos');
    $count =$counts->fetch_assoc();
    $max_page = floor(($count['cnt']+1)/5+1);
    //echo $max_page;


    $stmt =$db->prepare('select * from memos order by id desc limit ?,5');
    if(!$stmt):
        die($db -> error);
    endif;
    $page = filter_input(INPUT_GET,'page',FILTER_SANITIZE_NUMBER_INT) ;
    $page =($page ?: 1);
    $start = ($page -1)*5;
    
    $stmt ->bind_param('i',$start);
    $result = $stmt -> execute();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>memoの一覧です</title>
</head>
<body>
    <h1>メモ帳</h1>
    <p>→ <a href="input.html">新しいmemo</a></p>
    <?php if(!$result): ?>
        <p>表示するmemoはありません</p>
    <?php endif; ?>
    <?php $stmt->bind_result($id,$memo,$created); ?>
    <?php while ($stmt->fetch()): ?>
        <div>
            <h2><a href="memo.php?id= <?PHP echo $id; ?>">
                <?php echo htmlspecialchars(mb_substr ($memo,0,50)); ?>
            </a></h2>
            <time>
                <?php echo htmlspecialchars($created); ?>
            </time>
        </div>
        <hr>
    <?php endwhile; ?>


    <p>
        <?php if($page>1): ?>
            <a href="?page= <?PHP echo ($page-1); ?>"><?PHP echo ($page-1); ?>ページ目へ</a> | 
        <?php endif; ?>
        <?php if($page<$max_page): ?>
            <a href="?page= <?PHP echo ($page+1); ?>"><?PHP echo ($page+1); ?>ページ目へ</a>
        <?php endif; ?>
    </p>

</body>
</html>