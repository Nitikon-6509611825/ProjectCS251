<?php
// เชื่อมต่อกับ MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mysql_projectcs251";

$conn = new mysqli($servername, $username, $password, $dbname);

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// รับข้อมูลจาก JavaScript
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$userId = $_POST['uid'];
$pwd = $_POST['pwd'];

// บันทึกข้อมูลลงในฐานข้อมูล
$sql = "INSERT INTO myTable (fname, lname, email, userId, pwd) VALUES ('$fname', '$lname', '$email', '$userId', '$pwd')";

if ($conn->query($sql) === TRUE) {
    echo "บันทึกข้อมูลเรียบร้อยแล้ว";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>