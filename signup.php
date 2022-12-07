<?php
    include_once 'header.php';
?>
    <body>
        <main>
            <h3>Registo</h3>
            <form action="signup.inc.php" method="post">
                <input type="text" name="name" placeholder="Nome...">
                <input type="text" name="email" placeholder="Email...">
                <input type="text" name="uid" placeholder="Username...">
                <input type="password" name="pwd" placeholder="Password...">
                <input type="password" name="pwrepeat" placeholder="Reapeat Password...">
                <button type="submit" name="submit">Signup</button>
        </main>
    <body
    

<?php
    include_once 'footer.php';
?>