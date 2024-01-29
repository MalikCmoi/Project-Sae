<?php
include('config.php');

header('Access-Control-Allow-Origin: *');
// Connexion à la base de données
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
session_start();
    if(isset($_SESSION['username'])){
        if(isset($_GET['message']) && isset($_GET['salonName'])){
            if ($conn->connect_error) {
                die("Échec de la connexion à la base de données : " . $conn->connect_error);
            }
            $sql = "INSERT INTO `messages` (`id`, `type_message`, `message`, `utilisateur_username`, `name_island`, `date`) VALUES (NULL, 'Public', ?, ?, ?,?)";
            $sql = $conn->prepare($sql);
            $sql->bind_param("ssss", $_GET['message'] ,$_SESSION['username'],$_GET['salonName'],$_GET['date']);
            $sql->execute();
            $result = $sql->get_result();
            var_dump($result);
        }   
    }else{
        die('Erreur');
    }

?>