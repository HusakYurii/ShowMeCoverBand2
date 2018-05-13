<?php 
    $recepient = "gusak.1881@gmail.com";
    $sitename = "ShowMeCoverBand";

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $text = trim($_POST["message"]);
    $message = "Name: $name \n E-mail: $email \n Message: $text";

    $pagetitle = "New feedback from \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf8\"");
?>