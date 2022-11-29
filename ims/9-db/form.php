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
        Database fetcher
    </h1>

    <form method="GET" action="./index.php">
        <label>
            Columns
        </label>
        <input type="text" name="columns">
        <br>

        <label>
            table
        </label>
        <input type="text" name="table">
        <br>

        <input type="submit" value="send to index.php"/>
    </form>
</body>

</html>