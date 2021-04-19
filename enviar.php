<?php

$name = $_POST['nombre'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$msj = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $msj . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = "javier_9333@hotmail.com";
$asunto = "Mensaje de mi sitio web";

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");  
?>
