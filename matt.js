function afficherEmail(nom, prenom, num, email, message) {
    let contact = "mattheo.raud@ynov.com";
    let subject = "Premier Contact";
    let body = message;
    
    // Vérification de l'adresse e-mail
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("L'adresse e-mail n'est pas valide.");
        return;
    }

    let numRegex = /^\d{10}$/;
    if (!numRegex.test(num)) {
        alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
        return;
    }

    let mailto = `mailto:${contact}?subject=${subject}&body=Bonjour,%0A%0A${encodeURIComponent(body)}%0A%0ABien Cordialement%0A%0A${nom} ${prenom}%0A%0A${num}`;
    window.location.href = mailto;
}

function script() {
    document.getElementById("btnEnvoyerMail").addEventListener("click", (event) => {
        event.preventDefault();
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let num = document.getElementById("num").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        
        if (nom && prenom && num && email && message) {
            afficherEmail(nom, prenom, num, email, message);
        } else {
            alert("Veuillez remplir tous les champs du formulaire.");
        }
    });
}

script();