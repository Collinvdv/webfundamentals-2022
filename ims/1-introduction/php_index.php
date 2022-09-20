<!DOCTYPE html>
<html>
    <head>
        <title>
            Portfolio van Collin Van der Vorst
        </title>
        <style>
            body {
                background-color: lightblue;
            }

            h1, h2 {
                color: red;
                text-decoration: underline;
            }
        </style>
    </head>

    <body>
        <h1>
            <?php
                $secret_password = "123456";
                $firstname = "Collin";
                $firstname = "Collintje";
                echo $firstname;
            ?>
        </h1>

        <h2>
            Introductie
        </h2>

        <p>
            Ik ben Collin Van der Vorst, zo blij hier te zijn.
        </p>

        <h2>
            Projecten
        </h2>

        <ul>
            <?php 
                $projects = ["Website voor den boer", "Website voor ne slager"];

                foreach($projects as $project) {
                    echo "<li>" . $project . "</li>";
                }
            ?>
        </ul>

        <button>
            Change color
        </button>

        <script>
            var button = document.querySelector("button");
            var title = document.querySelector("h1");

            button.addEventListener("click", function() {
                title.style.color = "green";
            });
        </script>
    </body>
</html>

