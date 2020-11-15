<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "contato@lucasfnicolau.com"; // Add your email address in between the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
$subject = "Contato de: $name";
$body = "Você recebeu uma mensagem através do seu site. Aqui estão as informações:\n\nNome: $name\n\nEmail: $email\n\nTelefone: $phone\n\nMensagem:\n$message";
// $header = "De: noreply@lucasfnicolau.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $header = "Reply-To: $email";	
$headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/plain; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

if(!mail($to, $subject, $body, $headers))
  http_response_code(500);
?>
