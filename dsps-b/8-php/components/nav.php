<ul>
    <?php
    $pages = [
        "index",
        "shop",
        "contact",
    ];

    foreach ($pages as $page) {
    ?>
        <li>
            <a href="<?php echo $page ?>.php">
                <?php echo $page ?>
            </a>
        </li>
    <?php
    }
    ?>
</ul>