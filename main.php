<?php
    $email = $_POST["TxtxMail"];
    echo $email;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP TEST</title>
</head>
<body>
    <form action="main.php" method="POST">
        <label for="">Email:
        </label>
    <input type="text" name="TxtMail">4
    <br>
    <input type="submit" value="Enviar">
    </form>
    
</body>
</html>