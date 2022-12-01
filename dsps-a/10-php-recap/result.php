<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1> Customers</h1>

    <?php
    $host = "127.0.0.1";
    $user = "root";
    $password = "root";
    $db = "Northwind";
    $port = 8889;

    $conn = mysqli_connect($host, $user, $password, $db, $port);

    if ($conn == false) {
        echo "DB connection failed";
        die();
    }

    $table = $_GET["table"];
    $columns = $_GET["columns"];

    echo $table;
    echo $columns;

    $query = "SELECT $columns FROM $table;";
    $customers = mysqli_query($conn, $query)->fetch_all(MYSQLI_ASSOC);
    ?>

    <table border="1">
        <tr>
            <?php
                foreach($customers[0] as $columnName => $firstCustomer) {
            ?>
                <th>
                    <?php echo $columnName; ?>
                </th>
            <?php
                }
            ?>
        </tr>

        <?php
        foreach ($customers as $customer) {
        ?>
            <tr>
                <?php
                    foreach ($customer as $columnName => $columnValue) {
                ?>
                    <td>
                        <?php echo $columnValue; ?>
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