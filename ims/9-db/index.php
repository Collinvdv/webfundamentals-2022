<?php
$hostname = "127.0.0.1";
$user = "root";
$password = "root";
$database = "northwind";
$port = 8889;

$conn = mysqli_connect($hostname, $user, $password, $database, $port);

if ($conn == false) {
    echo "Connectie bestaat niet";
    die();
}

$query = "SELECT ". $_GET["columns"]." FROM ". $_GET["table"] . ";";
$rows = mysqli_query($conn, $query)->fetch_all(MYSQLI_ASSOC);
$conn->close();
?>
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
        <?php echo $_GET["table"] ?>
    </h1>

    <table border="1">

        <tr>
            <?php 
                foreach($rows[0] as $key => $column) {
            ?>
                <th>
                    <?php echo $key ?>
                </th>
            <?php
                }
            ?>
        </tr>

        <!-- Rows -->
        <?php
            foreach ($rows as $row) {
        ?>
            <tr>
                <?php
                    foreach ($row as $column) {
                ?>
                    <td>
                        <?php  echo $column; ?>
                    </td>
                <?php
                    }
                ?>

            </tr>
        <?php
            }
        ?>
    </table>
</body>

</html>