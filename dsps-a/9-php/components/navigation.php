<!-- Create navigation -->
<ul>
    <?php
    $links = ['home', 'contact', 'shop', 'about'];

    foreach ($links as $link) {
    ?>
        <li class="list-link">
            <a href="<?php echo $link; ?>.php">
                <?php echo $link; ?>
            </a>
        </li>
    <?php
    }
    ?>
</ul>