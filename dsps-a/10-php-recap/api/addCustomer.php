<?php
    $host = "127.0.0.1";
    $user = "root";
    $pass = "root";
    $db = "Northwind";
    $port = 8889;

    $conn = mysqli_connect($host,$user,$pass,$db,$port);

    if ($conn == false) {
        echo "bad db connection";
        die();
    }
    $customerID = $_GET["customerID"];
    $customerName = $_GET["customerName"];

    $getQuery = "SELECT * FROM CopyCustomers WHERE CustomerID LIKE '$customerID'";
    $result = mysqli_query($conn, $getQuery);

    if ($result->num_rows == 0) {
        $insertQuery = "INSERT INTO CopyCustomers(CustomerID, CompanyName) VALUES(\"$customerID\", \"$customerName\");";
        $result = mysqli_query($conn, $insertQuery);

        $response = array(
            "result" => "added",
            "query" => $insertQuery
        );
        echo json_encode($response);
    } else {
        $response = array(
            "result" => "already exists"
        );
        echo json_encode($response);
    }

    mysqli_close($conn);