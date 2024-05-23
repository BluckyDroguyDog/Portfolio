
gsap.registerPlugin(ScrollTrigger) 

gsap.from( ".skills .box", {
    scrollTrigger : {
        trigger : ".skills .container",
        toggleActions : "play reverse none reset",
        markers: false,
        start : "top 60%",
        end: "bottom 30%",

    },
    y: 100,
    opacity: 0,
    scale: 0,
    ease: "elastic.out(0.4, 0.15)",
    duration: 1,
    stagger: 0.5,

});

gsap.to(".boxA", {
    x: 935,
    rotation: 360,
    duration: 4,
    toggleActions : "play reverse none reset",
});

gsap.to(".boxC", {
    x: -935,
    rotation: 360,
    duration: 4,
    toggleActions : "play reverse none reset",
});

gsap.to(".boxB", {
    y: 50,
    rotation: 360,
    duration: 4,
    toggleActions : "play reverse none reset", 
})


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
    let contactForm = document.getElementById("contactForm");
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