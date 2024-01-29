<?php
include('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les informations d'inscription depuis le formulaire
    $newUsername = $_POST["newUsername"];
    $newPassword = $_POST["newPassword"];
    $passwordConfirm = $_POST["passwordConfirm"];

    // Vérifier si les mots de passe correspondent
    if ($newPassword !== $passwordConfirm) {
        echo "Les mots de passe ne correspondent pas. Veuillez réessayer.";
    } else {
        // Vérifier si l'utilisateur existe déjà
        $checkUserQuery = "SELECT * FROM utilisateur WHERE username = ?";
        $checkUserStmt = $conn->prepare($checkUserQuery);
        $checkUserStmt->bind_param("s", $newUsername);
        $checkUserStmt->execute();
        $checkUserResult = $checkUserStmt->get_result();

        if ($checkUserResult->num_rows > 0) {
            echo "Cet utilisateur existe déjà. Veuillez choisir un autre nom d'utilisateur.";
        } else {
            // Éviter les injections SQL en utilisant des requêtes préparées
            $sql = "INSERT INTO utilisateur (username, password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);

            // Hacher le mot de passe avant de l'insérer dans la base de données
            $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

            $stmt->bind_param("ss", $newUsername, $hashedPassword);

            if ($stmt->execute()) {
                echo "Inscription réussie!";
            } else {
                echo "Erreur lors de l'inscription. Veuillez réessayer.";
            }

            // Fermer la requête préparée
            $stmt->close();
        }

        // Fermer la requête préparée pour la vérification de l'existence de l'utilisateur
        $checkUserStmt->close();
    }
}

// Fermer la connexion à la base de données
$conn->close();
?>
