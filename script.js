const text = "PAULIN  MANTEAU  PAULIN  MANTEAU  ";
const circleText = document.getElementById("circleText");

for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.innerText = text[i];
    span.style.transform = `rotate(${i * (360 / text.length)}deg)`;
    circleText.appendChild(span);
}

// Fonction pour faire pop txt enchanté
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Vérifie si l'élément est visible
            console.log("Hello World  1")
            document.querySelector('.enchanteOne').classList.add('animationToAddToEnchanté');
            document.querySelector('.PmOne').classList.add('animationToAddToPm');
            observer.unobserve(entry.target);
        }
    });
}
const observerOptions = {
    root: null, // Utilise le viewport comme conteneur de référence
    rootMargin: '0px',
    threshold: 0.1 // L'élément doit être au moins à 10% visible pour déclencher l'observer
};
const observer = new IntersectionObserver(handleIntersection, observerOptions);

const detector = document.querySelector('.detectorToApparitionAnimation');
if (detector) {
    observer.observe(detector); // Commence à observer l'élément cible

}



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

function calculateHorizontalDistanceBetweenLines() {
    const timeline = document.querySelector('.timeline');
    const beforeStyles = window.getComputedStyle(timeline, '::before');
    const beforeLeft = parseFloat(beforeStyles.left);
    const afterStyles = window.getComputedStyle(timeline, '::after');
    const afterLeft = parseFloat(afterStyles.left);
    const distanceX = Math.abs(afterLeft - beforeLeft);
    document.documentElement.style.setProperty('--equalizerDistance', distanceX + 'px')
}

calculateHorizontalDistanceBetweenLines()

























