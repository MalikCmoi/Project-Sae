<?php
include('config.php');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
// Connexion à la base de données
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données : " . $conn->connect_error);
}

$sql = "SELECT id,coordX,coordY FROM salon_discussion"; 
$result = $conn->query($sql);

//var_dump($result->fetch_assoc());

// Supposons que $result soit votre résultat de requête SQL

// Initialiser un tableau pour stocker les résultats
$data = array();

// Boucle while pour récupérer les données de chaque ligne
while ($row = $result->fetch_assoc()) {
    // Ajouter chaque ligne dans le tableau
    $data[] = array(
        'id' => $row['id'],
        'X' => $row['coordX'],
        'Y' => $row['coordY']
    );
}

// Convertir le tableau en format JSON
$json_data = json_encode($data);
// Afficher le JSON
echo $json_data;




$conn->close();

?>