-- Create the database
CREATE DATABASE JeetCyberCafe;

-- Use the database
USE JeetCyberCafe;

-- Create the table for customer accounts
CREATE TABLE CustomerAccounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the table for job notifications
CREATE TABLE JobNotifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the table for customer inquiries
CREATE TABLE CustomerInquiries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT,
    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES CustomerAccounts(id)
);
