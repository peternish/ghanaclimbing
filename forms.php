<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
$servername = "server96";
$username = "ghanttfd_admindb";
$password = "{Fest\climbing2023**M_user";

$dbname = "ghanttfd_climbingfestdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phoneNum = $_POST['phoneNum'];
    $countryOrigin = $_POST['country-origin'];
    $countryResidence = $_POST['country-residence'];
    $climbingLevel = $_POST['climbingLevel'];
    $dietaryReq = $_POST['dietaryReq'];
    $transportChoice = $_POST['transportChoice'];
    $tourKwahu = isset($_POST['tourKwahu']) ? 1 : 0;
    $paragliding = isset($_POST['paragliding']) ? 1 : 0;
    $message = $_POST['messageText'];
    $interestedIn2024 = isset($_POST['nextYear']) ? 1 : 0;
    $keepPostedOnClimbing = isset($_POST['allClimbingEvents']) ? 1 : 0;

    $sql = "INSERT INTO climbFestApplicants (firstname, lastname, email, phonenum, countryorigin, countryresidence, climbinglevel, dietaryreq, transportchoice, tourkwahu, paragliding, message, interestedin2024, keeppostedonclimbing) 
            VALUES ('$firstName', '$lastName', '$email', '$phoneNum', '$countryOrigin', '$countryResidence', '$climbingLevel', '$dietaryReq', '$transportChoice', $tourKwahu, $paragliding, '$message', $interestedIn2024, $keepPostedOnClimbing)";

    if ($conn->query($sql) === TRUE) {
        echo "User data inserted successfully!";
        
        header("Location: index.html");
        exit();
    } 
    
    
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
