<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["number"];
    $message = $_POST["message"];

    $to = "amerrmismarr@gmail.com";
    $headers = "From: $name <$email>";
    $body = "Subject: $subject\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
