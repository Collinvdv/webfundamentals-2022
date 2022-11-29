<?php
    // Connectie met de DB
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

    // Customer ID en Customer Name wil ik in een variable
    $customerID = $_GET["customerID"];
    $customerName = $_GET["customerName"];

    // Eerst checken of de customer bestaat
    $query = "SELECT CustomerID FROM CopyCustomers WHERE CustomerID LIKE '$customerID'";

    $result = mysqli_query($conn, $query);

    if ($result->num_rows == 1) {
        $result = array(
            "status" => "200",
            "response" => "Item already exist"
        );
        echo json_encode($result);
    } else {
        // Als het niet bestaat voegen we hem toe
        $query = "INSERT INTO CopyCustomers(customerID, companyName) VALUES ('$customerID', '$customerName');";

        $result = mysqli_query($conn, $query);

        $result = array(
            "status" => "200",
            "response" => "Item added"
        );
        echo json_encode($result);
    }
