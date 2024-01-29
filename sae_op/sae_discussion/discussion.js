const username_from_api = "Luffy D. Poute"; //ici il faut recuperer le nom du profil, valeur statique pour le moment
const user_prime_from_api = "1.000.000"; //ici récupèrer la prime de l'utilisateur, valeur statique pour le moment
const user_profil_picture_from_api = "robin"; //choix possible "luffy", "zoro", "robin", "nami"

document.addEventListener("DOMContentLoaded", function () {
    //l'initialisation du champs input, pour qu'il soit toujours vide
    const message = document.getElementById("submit-input");
    message.value = "";
    const inputSubmit = document.getElementById("submit-input");
    inputSubmit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            console.log("ok");
            discussion();
        }
    });

    //l'initialisation de la prime de pirate
    const prime_img = document.getElementById("prime-pirate");
    prime_img.src = profil_prime_picture();
    document.querySelector('#pseudoUserPrime').textContent =  getCookie("UserName");
});

init();

function init(){
    
    let salon = document.querySelector('#info-chanel h1');
    fetch("http://localhost/sae_op/getMessage?name="+salon.textContent)
        .then(response => {
            // Vérifier si la réponse est réussie (statut HTTP 200)
            if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            // Convertir la réponse JSON en objet JavaScript
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("nbr-message").textContent = data.length;
            data.forEach(element => {
                const box_discussion = document.getElementById("box-discussion");
                const container = document.createElement("div");
                const header = document.createElement("div");
                const image_profil = document.createElement("img");
                const div_inner_header = document.createElement("div");
                const h3_header = document.createElement("h3");
                const h4_header = document.createElement("h4");
                const container_br = document.createElement("br");
                const container_p = document.createElement("p");
                const container_hr = document.createElement("hr");
        
                header.classList.add("header");
                image_profil.classList.add("profil");
                image_profil.src = profil_picture(); //ici il faut recuperer l'image du profil, valeur statique pour le moment
                image_profil.alt = "image de profil";
                h3_header.textContent = element.utilisateur_username;
                h4_header.textContent = element.date;
                container_p.textContent = element.message;
        
                div_inner_header.appendChild(h3_header);
                div_inner_header.appendChild(h4_header);
        
                header.appendChild(image_profil);
                header.appendChild(div_inner_header);
        
                container.appendChild(header);
                container.appendChild(container_br);
                container.appendChild(container_p);
                container.appendChild(container_hr);
        
                box_discussion.appendChild(container);
            });
            // Vous pouvez maintenant utiliser les données dans votre application
            const box_discussion = document.getElementById("box-discussion");
            box_discussion.scrollTop = box_discussion.scrollHeight;
        })
        .catch(error => {
            // Gérer les erreurs lors de l'appel à l'API
            console.error('Erreur lors de la requête API:', error);
        });

        fetch("http://localhost/sae_op/getIslandInfo?name="+salon.textContent)
        .then(response => {
            // Vérifier si la réponse est réussie (statut HTTP 200)
            if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            // Convertir la réponse JSON en objet JavaScript
            return response.json();
        })
        .then(data => {
            
            data = data[0];
            console.log(data);
            // Traiter les données obtenues de l'API
            let nbruser = document.querySelector("#nbr-visitors").textContent = data.nbr_visite;
            let nbrconnecteduser = document.querySelector("#nrb-actif-user").textContent = data.nbr_personnes_actives;
            // Vous pouvez maintenant utiliser les données dans votre application
        })
        .catch(error => {
            // Gérer les erreurs lors de l'appel à l'API
            console.error('Erreur lors de la requête API:', error);
        });
}


function getCookie(nomCookie) {
    var nom = nomCookie + "=";
    var cookies = document.cookie.split(';');
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(nom) === 0) {
            return cookie.substring(nom.length, cookie.length);
        }
    }
    
    return "";
}

function discussion() {
    let username = getCookie("UserName");
    const object_date = new Date();
    let jour = object_date.getDate();
    let mois = object_date.getMonth() + 1;
    let annee = object_date.getFullYear();
    let heure = object_date.getHours();
    let minute = object_date.getMinutes();
    let salon = document.querySelector('#info-chanel h1');
    if (jour < 10) { jour = "0" + jour; }
    if (mois < 10) { mois = "0" + mois; }
    if (heure < 10) { heure = "0" + heure; }
    if (minute < 10) { minute = "0" + minute; }

    const full_date = jour + "/" + mois + "/" + annee + ", à " + heure + "h" + minute;
    const message = document.getElementById("submit-input");
    const message_content = message.value;
    if (message_content.length > 0) {

        //Ajout message bdd
        fetch("http://localhost/sae_op/addMessage?message="+message_content+"&salonName="+salon.textContent+"&date="+full_date)
        .then(response => {
            // Vérifier si la réponse est réussie (statut HTTP 200)
            if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            // Convertir la réponse JSON en objet JavaScript
            return;
        })
        
        
        const box_discussion = document.getElementById("box-discussion");
        const container = document.createElement("div");
        const header = document.createElement("div");
        const image_profil = document.createElement("img");
        const div_inner_header = document.createElement("div");
        const h3_header = document.createElement("h3");
        const h4_header = document.createElement("h4");
        const container_br = document.createElement("br");
        const container_p = document.createElement("p");
        const container_hr = document.createElement("hr");

        header.classList.add("header");
        image_profil.classList.add("profil");
        image_profil.src = profil_picture(); //ici il faut recuperer l'image du profil, valeur statique pour le moment
        image_profil.alt = "image de profil";
        h3_header.textContent = username;
        h4_header.textContent = full_date;
        container_p.textContent = message_content;

        div_inner_header.appendChild(h3_header);
        div_inner_header.appendChild(h4_header);

        header.appendChild(image_profil);
        header.appendChild(div_inner_header);

        container.appendChild(header);
        container.appendChild(container_br);
        container.appendChild(container_p);
        container.appendChild(container_hr);

        box_discussion.appendChild(container);
        message.value = ""; //vider la barre de message
        box_discussion.scrollTop = box_discussion.scrollHeight; //pour revenir au bas de la div à chaque message
        //pour actualiser les informations à chaque messages
        location.reload();
    }

}

function friendlist_from_api(){
    //pour l'instant on a pas la logique des amis, donc fonction vide
}

function profil_picture() {
    if(user_profil_picture_from_api === "luffy"){
        return "sae_discussion/assets/profil_picture/luffy.webp";
    }
    if(user_profil_picture_from_api === "zoro"){
        return "sae_discussion/assets/profil_picture/zoro.webp"
    }
    if(user_profil_picture_from_api === "nami"){
        return "sae_discussion/assets/profil_picture/nami.webp"
    }
    if(user_profil_picture_from_api === "robin"){
        return "sae_discussion/assets/profil_picture/robin.webp"
    }
}

function profil_prime_picture() {
    if(user_profil_picture_from_api === "luffy"){
        return "sae_discussion/assets/prime_picture/luffy_prime.webp";
    }
    if(user_profil_picture_from_api === "zoro"){
        return "sae_discussion/assets/prime_picture/zoro_prime.webp"
    }
    if(user_profil_picture_from_api === "nami"){
        return "sae_discussion/assets/prime_picture/nami_prime.webp"
    }
    if(user_profil_picture_from_api === "robin"){
        return "sae_discussion/assets/prime_picture/robin_prime.webp"
    }
}