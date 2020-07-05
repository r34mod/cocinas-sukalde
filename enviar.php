<?php
$nombre = $_POST['nombre'];
$apel = $_POST['apel'];
$mail = $_POST['email'];
$number = $_POST['telefono'];
$cocina = $_POST['kitchen'];
$electrodomestico = $_POST['electrodomestico'];
$empresa = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . "\nApellido" . $apel . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " .  $cocina . " electrodomestico " . $electrodomestico . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'cocinassukalde@gmail.com';
$asunto = 'Cocinas%20Sukalde%20Cliente';

mail($para, $asunto, utf8_decode($mensaje), $header);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>