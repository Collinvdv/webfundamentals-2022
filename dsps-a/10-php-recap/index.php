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
            Whuuuut this is php?
        </h1>

        <?php 
            $firstname = "Collin";
            $familyname= "Van der Vorst";
            $fullname = $firstname . " " . $familyname;
            $age = 31;
            $height = 1.94;
            $goats = [
                "Courtois",
                "Messi",
                "KDB"
            ];

            $players = array(
                "messi" => 2,
                "batsman" => 1,
            );

            var_dump($players);
            echo $players["messi"];
            // for ($index = 0; $index <ul sizeof($goats); $index++) {
            //     echo $goats[$index] . '<br>';
            // }
        ?>
            <ul>
                <?php
                    foreach($goats as $index => $goat) {
                ?>
                    <li>
                        <?php echo $goat; ?>
                    </li>
                <?php
                    }
                ?>
            </ul>
    </body>
</html>