<?php
$recepient = "info@kiwikiwi.ru";
$sitename = "Зайявка с сайта!";


$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["message"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nemail: $email \nСообщение: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\nFrom: gvk@cl189691.tmweb.ru");
?>