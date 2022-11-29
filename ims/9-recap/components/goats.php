<?php
    $goats = [
        "T-rex",
        "Conny",
        "Clyde"
    ];
?>

<ul>
    <?php
    foreach ($goats as $goat) {
    ?>
        <li>
            <?php echo $goat; ?>
        </li>
    <?php
    }
    ?>
</ul>