<?php
// Démarre la session
session_start();

// Vérifie si la variable de session 'username' existe
if (isset($_SESSION['username'])) {
    // L'utilisateur est connecté
    session_regenerate_id(true);
    $username = $_SESSION['username'];
    setcookie("UserName", $username, time() + 3600, "/");
    require_once('sae_discussion/baratie.php');
} else {
    // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion par exemple
    header("Location: connexion.html");
    exit();
}
?>
