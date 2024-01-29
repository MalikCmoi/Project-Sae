const username_from_api = "Monkey D. Luffy";

document.addEventListener("DOMContentLoaded", function () {
    reset();
});

function poster(event) {
    event.preventDefault();

    let username = username_from_api;
    const posts_container = document.getElementById("posts-container");
    const description_user = document.getElementById("description-post");
    const description = description_user.value;
    const image_upload = document.getElementById("image-upload").files[0];

    if (!image_upload && !description) {
        alert("Veuillez sélectionner une image et une description !");
        return;
    }

    if (!image_upload) {
        alert("Veuillez sélectionner une image !");
        return;
    }

    if (!description) {
        alert("Veuillez sélectionner une description !");
        return;
    }

    const object_date = new Date();
    let jour = object_date.getDate();
    let mois = object_date.getMonth() + 1;
    let annee = object_date.getFullYear();
    let heure = object_date.getHours();
    let minute = object_date.getMinutes();

    if (jour < 10) { jour = "0" + jour; }
    if (mois < 10) { mois = "0" + mois; }
    if (heure < 10) { heure = "0" + heure; }
    if (minute < 10) { minute = "0" + minute; }

    const full_date = jour + "/" + mois + "/" + annee + ", à " + heure + "h" + minute;

    const li_element = document.createElement("li");
    const h2_element = document.createElement("h2");
    const p_element = document.createElement("p");
    const img_element = document.createElement("img");

    h2_element.textContent = username + ", le " + full_date;
    p_element.textContent = description;

    const reader = new FileReader();
    reader.onload = function (e) {
        img_element.src = e.target.result; // c'est pour afficher l'image que l'utilisateur a choisi.
    };
    reader.readAsDataURL(image_upload);

    img_element.alt = description;

    li_element.appendChild(h2_element);
    li_element.appendChild(p_element);
    li_element.appendChild(img_element);

    const firstChild = posts_container.firstChild;

    if (firstChild) {
        posts_container.insertBefore(li_element, firstChild);
    } else {
        posts_container.appendChild(li_element);
    }

    reset();
}

function reset() {
    document.getElementById("formulaire").reset();
    const posts_container = document.getElementById("posts-container");
    posts_container.scrollIntoView();
}
