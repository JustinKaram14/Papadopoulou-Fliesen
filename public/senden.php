<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed.');
}

$name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$location = trim(filter_input(INPUT_POST, 'location', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS));

if (!$name || !$email || !$message) {
    http_response_code(400);
    exit('Name, E-Mail und Nachricht sind Pflichtfelder.');
}

$to = 'kontakt@papadopoulos-fliesen.de'; // Zieladresse anpassen
$subject = 'Neue Anfrage von SP-Fliesen Website';
$body = "Name: $name\nE-Mail: $email\nTelefon: " . ($phone ?: '-') . "\nEinsatzort: " . ($location ?: '-') . "\n\nNachricht:\n$message";
$headers = "From: webseite@sp-fliesen.de\r\nReply-To: $email\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo 'Danke! Deine Nachricht wurde gesendet.';
} else {
    http_response_code(500);
    echo 'Fehler beim Senden.';
}
