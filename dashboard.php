<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['customer_id'])) {
    header("Location: login.php");
    exit();
}

// Get the customer ID from the session
$customerId = $_SESSION['customer_id'];

// You can fetch additional customer information from the database if needed

// Display the dashboard/welcome page
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Your Dashboard</title>
</head>
<body>
    <h1>Welcome to Your Dashboard</h1>
    <p>Hello, Customer <?php echo $customerId; ?>!</p>
    <p>This is your personalized dashboard where you can access various features and services.</p>
    <a href="logout.php">Logout</a>
</body>
</html>
