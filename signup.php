<?php
include_once 'header.php';
?>

<body>
    <main>
        <h3>Registo</h3>
        <form action="includes/signup.inc.php" method="post">
            <input type="text" name="name" placeholder="Nome...">
            <input type="text" name="email" placeholder="Email..." >
            <input type="text" name="uid" placeholder="Username..." >
            <input type="password" name="pwd" placeholder="Password..." >
            <input type="password" name="pwdrepeat" placeholder="Repeat Password..." >
            <button type="submit" name="submit">Signup</button>
        </form>
    </main>
    <body>

    <?php
       if (isset($_GET["error"])){
        if($_GET["error"] == "emptyinput"){
            echo "<p>Fill all fields please!</p>";

        } else if($_GET["error"] == "invalidUid"){
            echo "<p>Write a better username!</p>";

        } else if($_GET["error"] == "invalidEmail"){
            echo "<p>Enter a valid email!</p>";

        } else if($_GET["error"] == "passwordmatcherror"){
            echo "<p>Passwords don't match!</p>";

        } else if($_GET["error"] == "usernametaken"){            
            echo "<p>Choose another username!</p>";

        }  else if($_GET["error"] == "stmtfailed"){            
            echo "<p>Something went  wrong, try again!</p>";

        } else if($_GET["error"] == "none"){            
            echo "<p>You are registered, than you!</p>";

        } 
       } 
    ?>

        <?php
        include_once 'footer.php';
        ?>