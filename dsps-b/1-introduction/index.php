<!doctype html>
<html>
    <head>
        <style>
            body {
                background-color: aqua;
            }

            h1, h2 {
                color: blue;
                text-decoration: underline;
            }

        </style>
    </head>

    <body>
        <h1>
            Portfolio Collin Van der Vorst
        </h1>

        <h2>
            Introduction
        </h2>

        <p>
            I am Collin Van der Vorst, OMG my first html page. <br>
            Best day of my life.
        </p>

        <h2>
            Skills
        </h2>

        <p>
            Here are my skills:
        </p>

        <ul>
            <?php
                $secretPassword = "secret";
                $projects = ["Making jokes", "Programming a website"];

                foreach ($projects as $project) {
                    echo "<li>" . $project. "</li>";
                }
            ?>
        </ul>

        <button>
            Change the title color
        </button>

        <script>
            var button = document.querySelector("button");
            var title = document.querySelector("h1");
            var event = "click";
            var secretpassword = "secret";
            button.addEventListener(event, function() {
                title.style.color = "green";
            });
        </script>
    </body>
</html>