<!doctype html>
<html>
    <head>
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
            Portfolio of Collin Van der Vorst
        </h1>

        <h2>
            Introduction
        </h2>

        <p>
            Hello, I am Collin Van der Vorst <br>
            I love the Arnold
        </p>

        <h2>
            Skills
        </h2>

        <p>
            Here are my skills:
        </p>

        <ul>
            <?php
                $projects = ["Very good in programming", "Design not so much", "PHP programming"];

                foreach ($projects as $project) {
                    echo "<li>" . $project . "</li>";
                }
            ?>
        </ul>

        <button>
            Change the color of the title
        </button>

        <script>
            var password = "kititjeijt";
            var buttonElement = document.querySelector("button");
            var titleElement = document.querySelector("h1");

            buttonElement.addEventListener("click", function() {
                titleElement.style.color = "blue";
            });
        </script>
    </body>
</html>