<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        PHP PAGE
    </h1>
    <?php
        $isHot = true;

        if ($isHot) {
    ?>
        <p class="weather">
            It is hot
        </p>
    <?php
        } else {
    ?>
        <p class="weather">
            It is not hot
        </p>
    <?php
        }
    ?>
    <ul>
        <?php
            $countries = ['Belgium', 'Germany', 'USA'];

            foreach ($countries as $country) {
        ?>
                <li>
                    <?php echo $country; ?>
                </li>
        <?php
            }
        ?>
    </ul>
    <?php
        $firstname = "Collin";
        $familyname = 'Van der Vorst';
        $fullname = $firstname . " " . $familyname;
        $age = 31;
        $height = 1.94;
        $isAwesome = false;
        $goats = ["T-rex", "Conny", "Clyde"];

        $person = array(
            "firstname" => "Collin",
            "familyname" => "Van der Vorst",
            "age" => 31,
            "height" => 1.94,
            "isAwesome" => false
        );

        printWithBreak($person["firstname"]);
        
        // for ($index = 0; $index < sizeof($goats); $index++) {
        //     echo $goats[$index];
        // }
        echo "<ul>";
        foreach ($goats as $goat) {
            echo "<li>" . $goat . "</li>";
        }
        echo "</ul>";

        const VAT_PERCENTAGE_BELGIUM = 21;
        printWithBreak(VAT_PERCENTAGE_BELGIUM);

        $counter = 10;
        $counter++;
        ++$counter;


        function printWithBreak($content) {
            echo $content . '<br>';
        }
    ?>
</body>
</html>