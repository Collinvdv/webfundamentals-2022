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

    $query = "SELECT CustomerID, CompanyName, ContactName FROM Customers;";
    $customers = mysqli_query($conn, $query)->fetch_all(MYSQLI_ASSOC);
    ?>

    <table border="1">
        <tr>
            <th>
                CustomerID
            </th>
            <th>
                CompanyName
            </th>
            <th>
                ContactName
            </th>
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