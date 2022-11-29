<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>
        Php file
    </h1>

    <?php
        $firstname = "Collin";
        $lastname = "Van der Vorst";
        $fullname = $firstname . " " . $lastname;
        $age = 31;
        $height = 1.94;
        $isCool = true;

        $rows = array(
            "collin" => 20,
            "lisa" => 16,
        );

        echo $rows["collin"];

        include "./components/goats.php";
    ?>
   

</body>

</html>