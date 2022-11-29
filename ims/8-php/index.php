<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        // Components
        require "./components/navigation.php";
    

        // Functionaliteit 
        require "./functions/string.php";
    ?>
    <ul>
        <?php
        $firstname = "Collin";
        $lastname = "Van der Vorst";
        $fullname = $firstname . " " . $lastname;
        $age = 31;
        $height = 1.94;
        $isAwesome = true;
        $goats = ["T-rex", "Connie", "Clyde"];
        $goats2 = array("Collin", "Lisa", "Kamiel");

        $person = array(
            "firstname" => "collin",
            "lastname" => "van der vorst",
            "age" => 31,
            "goats" => ["T-rex", "Connie", "Clyde"]
        );

        printWithBreak($person["age"]);
        printWithBreak(sizeof($person["goats"]));

        if ($isAwesome == true) {
            printWithBreak("'T zal wel zijn dat hij awesome is.");
        } else {
            printWithBreak("'Hij is lame.");
        }

        for ($index = 0; $index < sizeof($goats); $index++) {
            printWithBreak($goats[$index]);
        }

        foreach ($goats as $index => $goat) {
            printWithBreak($index);
            printWithBreak($goat);
        }

        const APPNAME = "Collin Van der Vorst Awesome App";

        printWithBreak(APPNAME);

        $counter = 10;
        $counter--;
        printWithBreak($counter);
        ?>
    </ul>
</body>

</html>