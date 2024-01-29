<?php
// Démarre la session
session_start();

// Vérifie si la variable de session 'username' existe
if (isset($_SESSION['username'])) {
    // L'utilisateur est connecté
    session_regenerate_id(true);
    $username = $_SESSION['username'];
    require_once('map/index.html');
} else {
    // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion par exemple
    header("Location: connexion.html");
    exit();
}
?>
