<?php
// Get user input
$email = $_POST['email'];
$password = $_POST['password'];

// Database connection
$servername = "localhost";  // Replace with your database server name
$username = "username";     // Replace with your database username
$password_db = "password";  // Replace with your database password
$dbname = "databasejeetcybercafe";  // Replace with your database name

$conn = new mysqli($servername, $username, $password_db, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL query
$query = "SELECT id, email, password FROM CustomerAccounts WHERE email = '$email'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $storedPassword = $row['password'];

    // Verify password
    if (password_verify($password, $storedPassword)) {
        // Successful login
        $customerId = $row['id'];
        session_start();
        $_SESSION['customer_id'] = $customerId;

        // Redirect to a dashboard or welcome page
        header("Location: dashboard.php");
        exit();
    } else {
        // Incorrect password
        echo "Incorrect email or password.";
    }
} else {
    // User not found
    echo "User not found.";
}

$conn->close();
?>
