🏎️ TeslaPilot — Navigation & Radar
TeslaPilot est une application web progressive (PWA) ultra-légère conçue pour offrir une interface de navigation minimaliste inspirée de l'écosystème Tesla, avec un système d'alerte radar en temps réel.

✨ Caractéristiques principales
🛰️ Cartographie Hybride : Utilisation de tuiles satellites haute résolution avec une couche de noms de rues superposée pour une lisibilité parfaite.

⚠️ Détection de Radars : Alertes visuelles et sonores lors de l'approche de radars de vitesse, basées sur les données en temps réel de l'API Overpass (OpenStreetMap).

🧭 Orientation Dynamique : Basculez entre le mode "Nord en haut" et le mode "Sens de la marche" avec une rotation fluide de la carte.

💎 Interface HUD Modernisée : Design "Glassmorphism" avec une horloge futuriste intégrée en bas à droite de l'écran.

⚙️ Paramétrage Avancé : Personnalisez la distance de détection (de 200m à 2000m), le volume des alertes et gérez le mode sonore.

🌐 Performance PWA : Service Worker intégré pour une fluidité maximale, même avec une connexion instable, et installation possible sur l'écran d'accueil (Tesla ou Smartphone).

🚀 Installation et Déploiement
Prérequis : Un hébergement avec support HTTPS est obligatoire (pour la géolocalisation et l'activation du Service Worker).

Fichiers nécessaires :

index.html : L'interface et la logique principale.

sw.js : Le script du Service Worker pour la gestion du cache.

manifest.json : Le fichier de configuration pour l'installation PWA.

Accès : Ouvrez votre URL dans le navigateur de votre choix. Pour une expérience optimale dans une Tesla, utilisez le mode plein écran.

🛠️ Stack Technique
Leaflet.js : Bibliothèque principale pour le rendu cartographique.

Overpass API : Requêtes spatiales pour récupérer les positions des radars.

Web Audio API : Génération de sons d'alerte (bips) sans fichiers audio externes.

Leaflet Plugins : GeometryUtil (calcul du cap) et EdgeBuffer (préchargement des tuiles pour plus de fluidité).

📖 Mode d'emploi
Initialisation : Cliquez sur "ACTIVER AUDIO" au lancement pour permettre les alertes sonores (contrainte des navigateurs modernes).

Navigation : Cliquez sur "GPS" pour centrer la carte sur votre position actuelle.

Tests : Utilisez le bouton "TEST" (faible opacité) pour simuler une approche de radar et vérifier vos réglages.

Réglages : Cliquez sur l'icône "Engrenage" pour ajuster la distance de sécurité en fonction de votre trajet (ville vs autoroute).

⚠️ Avertissement de sécurité : TeslaPilot est un outil d'assistance. Ne manipulez pas l'application en conduisant. Respectez scrupuleusement le code de la route et les limitations de vitesse.
