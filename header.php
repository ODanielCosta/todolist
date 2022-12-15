<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
    <script src="app.js" type="text/javascript" defer></script>
</head>



<header>
    <a href="index.php">
        <img id="site-logo" src="img/logo_black.svg" alt="Website Logo">
    </a>
    <div class="site-menu">

        <button class="menu-btn" href="semanal.php"><a href="semanal.php">Tarefas Semanais</a></button>

        <button class="menu-btn">Tarefas Mensais</button>
        <button class="menu-btn">Sobre</button>
        <button class="menu-btn">FAQ</button>
    </div>
    <div class="login-menu">
        <!--
        <button class="signup.php"><a href="signup.php">signup</a></button>
        <button class="login"><a href="login.php">login</a></button>-->

        <?php
    if(isset($_SESSION["useruid"])){
        echo "<button class='profileBtn'><a href='profile.php'>Profile</a></button>";
        echo "<button class='logoutBtn'><a href='includes/logout.inc.php'>Logout</a></button>";
    }else{
        echo "<button class='signup.php'><a href='signup.php'>signup</a></button>";
        echo "<button class='login'><a href='login.php'>login</a></button>";
    }
    ?>
    </div>
</header>