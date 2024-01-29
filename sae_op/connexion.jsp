<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet">
</head>

<!--
/** Malik je t'ai mis les instructions pour les controlleurs : **/

// Pour le contrôleur de connexion (connexionController)
String username = request.getParameter("username");
String password = request.getParameter("password");

// Pour le contrôleur d'inscription (inscriptionController)
String username = request.getParameter("username");
String password = request.getParameter("password");
String passwordConfirm = request.getParameter("passwordConfirm");
-->

<body>
    <div id="formulaire-wrapper">
        <video id="background-video" autoplay loop muted>
            <source src="assets/fond_mer.mp4" type="video/mp4">
        </video>
        <img id="image-bg-formulaire" src="assets/fond-op.jpeg" alt="image fond de mer one piece">
        <div id="formulaire-content">
            <div class="lb-header">
                <a href="#" class="active" id="login-box-link">Connexion</a>
                <a href="#" class="" id="signup-box-link">Inscription</a>
            </div>
            <form id="connexion-process" class="" action="connexionController" method="post">
                <label for="username">Votre email :</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Votre mot de passe:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Connexion</button>
            </form>
            <form id="inscription-process" class="hidden-form" action="inscriptionController" method="post">
                <label for="username">Entrer un email :</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Entrer un mot de passe:</label>
                <input type="password" id="password" name="password" required>
                <label for="password-confirm">Confirmer votre mot de passe:</label>
                <input type="password" id="password-confirm" name="password" required>
                <button type="submit">Inscription</button>
            </form>
        </div>
    </div>
    <script src="switch-login-signup.js"></script>
</body>

</html>
