
<h1>Loginページ</h1>
<!-- <img src="<?php echo BASE_IMAGE_PATH ?>logo.svg" alt=""> -->
<form action=" <?php echo CURRENT_URI; ?> " method="POST">
    <div>
        id:<input type="text" name="id">
    </div>
    <div>
        pwd:<input type="password" name="pwd">
    </div>
    <div>
        <input type="submit" value="login">
    </div>
</form>

