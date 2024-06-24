const text = "PAULIN  MANTEAU  PAULIN  MANTEAU  ";
const circleText = document.getElementById("circleText");

for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerText = text[i];
    span.style.transform = `rotate(${i * (360 / text.length)}deg)`;
    circleText.appendChild(span);
}

document.addEventListener('DOMContentLoaded', function() {
    // Fonction de rappel pour l'observateur
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                        // Sélectionne l'élément à animer
                        const targets = document.querySelectorAll('.ObjectToAnimate');
                        targets.forEach(target => {
                            if (target) {
                                console.log("ligne 19 script executé sir")
                                if (target.classList.contains('enchanteOne')) {
                                    console.log("ligne 21 script executé sir")
                                    target.classList.add('animationToAddToEnchanté');
                                } else {
                                    console.log("ligne 25 script executé sir")
                                    target.classList.add('animationToAddToPm');
                                }
                            }
                        });
                        // Arrête d'observer l'élément déclencheur après l'animation
                        observer.unobserve(entry.target);
            }
        });
    };

    // Options pour l'observateur
    const options = {
        root: null, // Par rapport à la fenêtre du viewport
        rootMargin: '0px',
        threshold: 0.1 // Déclenchement lorsque 10% de l'élément est visible
    };

    // Crée un nouvel observateur avec la fonction de rappel et les options
    const observer = new IntersectionObserver(callback, options);

    // Obtenez l'élément déclencheur
    const detector = document.querySelector('.detectorToApparitionAnimation');
    if (detector) {
        // Ajoute l'élément déclencheur à l'observateur
        observer.observe(detector);
    }
});



document.getElementById('pdf-opener-web').addEventListener('click', function() {
    window.open('Certification/fusionedWebCertif.pdf', '_blank');
});

document.getElementById('test').addEventListener('click', function() {
    window.open('Certification/fusionedJeuxVidéoCertif.pdf', '_blank');
});

document.getElementById('test2').addEventListener('click', function() {
    console.log("Hello world !")
    window.open('Certification/appMobileReactNativeCertif.pdf', '_blank');
});


























