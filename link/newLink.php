<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pokémob Costum Link">
    <title>Processing...</title>
</head>

<body>

<?php
// phpinfo();
// link and name must come in without spaces

$link = $_POST['link'];
$name = $_POST['name'];
$file_name = "../sub/link/links.txt";
$fileCat = file_get_contents($file_name, "a");

if ($link == "" or $name == "") {
    unset($_POST);
    header("Location: http://pokemob.net/link?ok=false&error=empty");
    die();
} elseif (str_contains($fileCat, "\n" . $name . " ")){
    header("Location: http://pokemob.net/link?ok=false&error=exist&link=" . $link ."&short=" . $name);
    die();
} elseif (str_contains($link, "?")){
    header("Location: http://pokemob.net/link?ok=false&error=3f&link=" . $link ."&short=" . $name);
    die();
} else {
    if (str_contains($link, "://")){

    } else {
        $link = "http://" . $link;
    }
    
    $curl = curl_init($link);
    curl_setopt($curl, CURLOPT_NOBODY, true);
    $curl_result = curl_exec($curl);

    // website won't be decleared as valid if it's not run through
    $website_true = false;
    if($curl_result !== false) {
        $status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($status_code == 404)
        {
            unset($_POST);
            header("Location: http://pokemob.net/link?ok=false&error=404&link=" . $link . "&short=". $name);
            die();
        }
        else
        {
            $website_true = true;
        }
    }
    else {
        unset($_POST);
        header("Location: http://pokemob.net/link?ok=false&error=404&link=" . $link . "&short=". $name);
        die();
    } 


    if (str_contains($name, " ")){
        unset($_POST);
        header("Location: http://pokemob.net/link?ok=false&error=space&link=" . $link ."&short=" . $name);
        die();
    } else {

    }


    // run only if url valid, the function seems to ignore the header command eariler
    if ($website_true == true){
        $file = fopen($file_name, "a");
        fwrite($file, $name . " " . $link . "\n");
        fclose($file);
        unset($_POST);

        header("Location: http://pokemob.net/link?ok=true&link=" . $link ."&short=" . $name);
        // echo("<p id='link-php-message'>" . $name . "</p>");
    } else {

        header("Location: http://pokemob.net/link?ok=false&error=404&link=" . $link ."&short=" . $name);
    }
    

}

?>

    
</body>

</html>
