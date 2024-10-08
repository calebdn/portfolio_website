<?php
// Replace with your email address
$to = 'caleb.dunthorne@icloud.com';

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validate form data
if (empty($name) || empty($email) || empty($message)) {
    echo 'Please fill out all fields.';
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Please enter a valid email address.';
    exit;
}

// Email subject and body
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you for your message. We will get back to you soon!';
} else {
    echo 'There was a problem sending your message. Please try again later.';
}
?>