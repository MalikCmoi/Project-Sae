<?php
include('config.php');

// Connexion à la base de données
$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Récupérer les informations d'identification depuis le formulaire
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Éviter les injections SQL en utilisant des requêtes préparées
    $sql = "SELECT * FROM utilisateur WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();

    // Vérifier si l'utilisateur existe dans la base de données
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // L'utilisateur a été trouvé, vous pouvez rediriger vers la page principale ou effectuer d'autres actions
        echo "Connexion réussie!";
        $_SESSION['username'] = $username;
        header("Location: map.php");
    } else {
        echo "Identifiants incorrects. Veuillez réessayer.";
    }

    // Fermer la requête préparée
    $stmt->close();
}

// Fermer la connexion à la base de données
$conn->close();
?>

