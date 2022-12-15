<?php
include_once 'header.php';
?>

<body>
    <main>
        <h3>Login</h3>
        <form action="includes/login.inc.php" method="post">
            <input type="text" name="uid" placeholder="Username or Email...">
            <input type="password" name="pwd" placeholder="Password...">
            <button type="submit" name="submit">Login</button>
    </main>

    <body>

    <?php
       if (isset($_GET["error"])){
        if($_GET["error"] == "emptyinput"){
            echo "<p>Fill all fields please!</p>";

        } else if($_GET["error"] == "wronglogin"){
            echo "<p>Incorrect information!</p>";

        } 
       } 
    ?>

        <?php
        
        include_once 'footer.php';
        ?>