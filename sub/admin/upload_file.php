<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
    <title>Upload!</title>
</head>
<body>
    <section class="banner">
        <a href="/">
            <img class="icon" src="/img/capoo_logo.png" alt="Logo">
        </a>
    </section>


<?php
$fileCnt = count( $_FILES["uploadFile"]["name"] );
for( $i = 0; $i < $fileCnt; $i++ )
{
    $errorCode = $_FILES['uploadFile']['error'][$i];
    if( $_FILES["uploadFile"]["error"][$i] == 0 )
    {
        echo "<p class='log_text'>File Temp: " . $_FILES["uploadFile"]["tmp_name"][$i] . "<br></p>";
        echo "<p class='log_text'>File Name: " . $_FILES["uploadFile"]["name"][$i] . "<br></p>";
        echo "<p class='log_text'>File Type: " . $_FILES["uploadFile"]["type"][$i] . "<br></p>";
        echo "<p class='log_text'>File Size: " . $_FILES["uploadFile"]["size"][$i] . "<br></p>";
        $fileNme = $_FILES["uploadFile"]["name"][$i];
        $dest = "".$_FILES["uploadFile"]["name"][$i];
        
        if (copy( $_FILES["uploadFile"]["tmp_name"][$i], $dest )){
            if ($fileCnt == 1) {
                unset($_POST);
                header("Location: http://admin.pokemob.net?ok=true" . "&file=". $fileNme . "&cnt=". $fileCnt);
                die();
            } elseif ($i == $fileCnt -1) {
                unset($_POST);
                header("Location: http://admin.pokemob.net?ok=true" . "&file=". $fileNme . "&cnt=". $fileCnt);
                die();
            }
        } else{
            unset($_POST);
            header("Location: http://admin.pokemob.net?ok=false&error=" . $errorCode . "&file=". $fileNme);
            die();
        }
    }
    else if( $_FILES["uploadFile"]["error"][$i] <> 4 )
        unset($_POST);
        header("Location: http://admin.pokemob.net?ok=false&error=" . $errorCode . "&file=". $fileNme);
        die();
}
?>

<a class="important_link" href="/">返回</a>
<a class="important_link" href="">dsds</a>

</body>
</html>