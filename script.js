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
                                if (target.classList.contains('enchanteOne')) {
                                    target.classList.add('animationToAddToEnchanté');
                                    console.log("line 22 executed");
                                    setTimeout(() => {
                                        document.getElementById('timelineId').style.display = 'block';
                                        document.getElementById('lilSpaceTransition').style.display = 'block';
                                        document.getElementById('endPartToActivate').style.display = 'block';
                                    }, 2000);
                                } else {
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



document.getElementById('pdf-opener-web-WebCertif').addEventListener('click', function() {
    window.open('Certification/fusionedWebCertif.pdf', '_blank');
});

document.getElementById('pdf-opener-web-JeuxVidéosCertif').addEventListener('click', function() {
    window.open('Certification/fusionedJeuxVidéoCertif.pdf', '_blank');
});

document.getElementById('pdf-opener-web-appMobileCertif').addEventListener('click', function() {
    console.log("Hello world !")
    window.open('Certification/appMobileReactNativeCertif.pdf', '_blank');
});


























