<?php
include_once 'header.php';
echo phpinfo() 
?>

<body>
    <main>
        <h3>Login</h3>
        <form action="includes/login.inc.php" method="post">
            <input type="text" name="name" placeholder="Username or Email...">
            <input type="password" name="pwd" placeholder="Password...">
            <button type="submit" name="submit">Login</button>
    </main>

    <body>

        <?php
        
        include_once 'footer.php';
        ?>