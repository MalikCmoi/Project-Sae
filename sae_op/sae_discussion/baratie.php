<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baratie discussion</title>
    <link rel="stylesheet" href="sae_discussion/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
</head>

<body>
    <div id="main-background-chat"></div>
    <div id="main-content">
        <div id="header-discussion">
            <div id="info-chanel">
                <h1><?=$_GET['NameSalon']?></h1>
                <div>
                    <img src="sae_discussion/assets/logo-chat.png" alt="logo discussion">
                    <h2 id="nbr-message"></h2>
                </div>
                <div>
                    <img src="sae_discussion/assets/pirate.png" alt="logo de pirate">
                    <h2 id="nbr-visitors"></h2>
                </div>
                <div>
                    <img src="sae_discussion/assets/actif.png" alt="logo de pirate actif">
                    <h2 id="nrb-actif-user"></h2>
                </div>
                <a id="btnNav" href="map.php"><button>Naviguer</button></a>
            </div>
            <div id="divPrime" >
                <img id="prime-pirate" src="" alt="image de la prime utilisateur">
                <p id="pseudoUserPrime">Luffy Monkey D</p>
            </div>
        </div>
        <div id="main-discussion">
            <div id="box-discussion">
                <div>
                    <div class="header">
                        <img class="profil" src="sae_discussion/assets/baratie.png" alt="">
                        <div>
                            <h3>Pirate du Turfu</h3>
                            <h4>25/05/2023, à 00H30</h4>
                        </div>
                    </div>
                    <br>
                    <p>Lorem Ipsum hzdhzdhzhd dzhhdz h dhzhdhzdh dhzdhhzdh zhdhzhdhzhhdzhdhhhhhhhhhhhh hdzhhhhhhhhhhhh
                        dhzzzzzzzzzzzzzzzzzzhdzhdhzhdzhdhzhdhzhdhzhd</p>
                    <hr>
                </div>
                <div>
                    <div class="header">
                        <img class="profil" src="sae_discussion/assets/baratie.png" alt="">
                        <div>
                            <h3>Pirate123</h3>
                            <h4>25/05/2023, à 00H31</h4>
                        </div>
                    </div>
                    <br>
                    <p>Lorem Ipsum hzdhzdhzhd dzhhdz h dhzhdhzdh dhzdhhzdh zhdhzhdhzhhdzhdhhhhhhhhhhhh hdzhhhhhhhhhhhh
                        dhzzzzzzzzzzzzzzzzzzhdzhdhzhdzhdhzhdhzhdhzhd</p>
                    <hr>
                </div>
            </div>
            <div id="input-container">
                <input id="submit-input" type="text">
                <button id="submit-button" onclick="discussion()"><img src="sae_discussion/assets/fleche.png" alt="fleche"></button>
            </div>
        </div>
        <div id="friend-list">

        </div>
    </div>
</body>

</html>
<script src="sae_discussion/discussion.js"></script>