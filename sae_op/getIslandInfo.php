<?php
include('config.php');

header('Access-Control-Allow-Origin: *');
// Connexion à la base de données
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion à la base de données : " . $conn->connect_error);
}elseif(!isset($_GET['id']) && !isset($_GET['name'])){
    die("Aucun Id!");
}

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "SELECT * FROM salon_discussion WHERE id = ?";
    $sql = $conn->prepare($sql);
    $sql->bind_param("i", $id);
    $sql->execute();
}elseif(isset($_GET['name'])){
    $name = $_GET['name'];
    $sql = "SELECT * FROM salon_discussion WHERE name_island3 = ?";
    $sql = $conn->prepare($sql);
    $sql->bind_param("s", $name);
    $sql->execute();
}

$result = $sql->get_result();


$data = array();
// var_dump($result->fetch_assoc());
header('Content-Type: application/json');
// Boucle while pour récupérer les données de chaque ligne
while ($row = $result->fetch_assoc()) {
    // Ajouter chaque ligne dans le tableau
    $data[] = array(
        'id' => $row['id'],
        'description' => $row['description'],
        'nbr_visite' => $row['nbr_visite'],
        'nbr_personnes_actives' => $row['nbr_personnes_actives'],
        'name_island3' => $row['name_island3']
    );
}

// Convertir le tableau en format JSON
$json_data = json_encode($data);
// Afficher le JSON
echo $json_data;




$conn->close();

?>