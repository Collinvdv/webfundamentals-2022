<ul>
    <?php
    $links = ["index", "home", "contact"];

    foreach ($links as $link) {
    ?>
        <li>
            <a href="<?php echo $link . ".php" ?>">
                <?php echo $link ?>
            </a>
        </li>
    <?php
    }

    ?>
</ul>