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
            PHP File
        </h1>

        <?php
            const VAT_BELGIUM = 21;
        VAT_BELGIUM = 31;
            echo VAT_BELGIUM;
            $personCollin = array(
                "firstname" => "Collin",
                "lastname" => "Van der Vorst",
                "age" => 31,
                "height" => 1.94,
                "isAwesome" => true,
                "goats" => ["T-rex", "Conny", "Clyde"],
            );
            echo '<p>'. $personCollin["goats"][0] . '</p>';
            echo sizeof($personCollin["goats"]);

            for ($index = 0; $index < sizeof($personCollin["goats"]); $index++) {
                echo $personCollin["goats"][$index];
            }
            
            foreach($personCollin["goats"] as $index => $goat) {
                echo $index;
                echo $goat;
            }
        ?>
    </body>
</html>