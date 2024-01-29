<?php
include('config.php');

header('Access-Control-Allow-Origin: *');
// Connexion à la base de données
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données : " . $conn->connect_error);
}elseif(!isset($_GET['name'])){
    die("Aucun Id!");
}
$name = $_GET['name'];
$sql = "SELECT * FROM messages WHERE name_island = ?";
$sql = $conn->prepare($sql);
$sql->bind_param("s", $name);
$sql->execute();
$result = $sql->get_result();


$data = array();
// var_dump($result->fetch_assoc());
header('Content-Type: application/json; charset=utf-8');
// Boucle while pour récupérer les données de chaque ligne
while ($row = $result->fetch_assoc()) {
    // Ajouter chaque ligne dans le tableau
    $data[] = array(
        'message' => $row['message'],
        'utilisateur_username' => $row['utilisateur_username'],
        'date' => $row['date'],
    );
}

// // Convertir le tableau en format JSON
$json_data = json_encode($data);
// Afficher le JSON
echo $json_data;




$conn->close();

?>