var map;
window.onload = () => {
    console.log("ok");
    map = L.map('map',{
    }).setView([0, -0.12],2);

    L.tileLayer('./map/images/map.gif', {
    worldCopyJump:true,
    maxZoom: 10,
    }).addTo(map);

    getIsland();

    var circle = L.circle([70, -19], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 60000
    }).addTo(map);

    console.log("fin");

    var leafIcon = L.icon({
        iconUrl: './map/images/island.png',
        iconSize: new L.Point(140,100)
    });



    circle.on('click', () => {
        window.location.href = "./sae_galerie/galerie.html";
    });
    document.querySelector(".quit").addEventListener('click', () => {
        document.getElementById("ileInfo").style.display = "none";
    })
    document.querySelector(".quit").addEventListener('click', () => {
        document.getElementById("ileInfo").style.display = "none";
    })
}
function onMapClick(e) {
    getIslandInfo(e.target.options["idIsland"]);
    if(document.getElementById("ileInfo").style.display == "none"){
        console.log(e.target.options["idIsland"]);
        getIslandInfo(e.target.options["idIsland"]);
        document.getElementById("ileInfo").style.display = "flex";
    }
}

function getIslandInfo(idIsland) {
    fetch("http://localhost/sae_op/getIslandInfo?id="+idIsland)
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

            fetch("http://localhost/sae_op/lastmessage?name="+data.name_island3)
                .then(response => {
                    // Vérifier si la réponse est réussie (statut HTTP 200)
                    if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
                    }
                    // Convertir la réponse JSON en objet JavaScript
                    return response.json();
                })
                .then(data1 => {
                    const divMessage = document.querySelector('.divMessage');
                    divMessage.innerHTML = "";

                    data1.forEach(element => {
                        let newElem = document.createElement('p');
                        newElem.className = "message";
                        newElem.textContent = element.utilisateur_username +": " + element.message + " | " + element.date;
                        divMessage.appendChild(newElem);
                    });
                    console.log(data1);
                })
                .catch(error => {
                    // Gérer les erreurs lors de l'appel à l'API
                    console.error('Erreur lors de la requête API:', error);
                });
            // Traiter les données obtenues de l'API
            let nbrmessage = document.querySelector("#nbrmessage").textContent = "500";
            let nbruser = document.querySelector("#nbruser").textContent = data.nbr_visite;
            let nbrconnecteduser = document.querySelector("#nbrconnecteduser").textContent = data.nbr_personnes_actives;
            document.querySelector("#descr").textContent = data.description;
            document.querySelector('#ileInfo h1').textContent = data.name_island3;
            document.querySelector("#naviguer").href = "Salon?NameSalon="+data.name_island3;
            // Vous pouvez maintenant utiliser les données dans votre application
        })
        .catch(error => {
            // Gérer les erreurs lors de l'appel à l'API
            console.error('Erreur lors de la requête API:', error);
        });
}

function getIsland() {
    fetch("http://localhost/sae_op/getIsland")
        .then(response => {
            // Vérifier si la réponse est réussie (statut HTTP 200)
            if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            // Convertir la réponse JSON en objet JavaScript
            return response.json();
        })
        .then(data => {
            // Traiter les données obtenues de l'API
            console.log(data);
            data.forEach(element => {

                var leafIcon = L.icon({
                    iconUrl: './map/images/island.png',
                    iconSize: new L.Point(140,100)
                });
                L.marker(new L.LatLng(parseFloat(element.X), parseFloat(element.Y)), { icon: leafIcon , idIsland: element.id }).addTo(map).on('click', onMapClick);

                // L.circle([parseFloat(element.X), parseFloat(element.Y)], {
                //     color: 'red',
                //     fillColor: '#f03',
                //     fillOpacity: 0.5,
                //     radius: 60000,
                //     idIsland: element.id
                // }).addTo(map).on('click', onMapClick);
            });
            // Vous pouvez maintenant utiliser les données dans votre application
        })
        .catch(error => {
            // Gérer les erreurs lors de l'appel à l'API
            console.error('Erreur lors de la requête API:', error);
        });
}