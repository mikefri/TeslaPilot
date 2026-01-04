# 🏎️ TeslaPilot `Navigation & Radar`

> **Assistant de navigation PWA ultra-léger** inspiré de l'écosystème Tesla. Sécurité, fluidité et design *Glassmorphism* pour votre conduite.

---

### 🛡️ Systèmes Embarqués

* **🛰️ Cartographie Hybride** : Fusion de tuiles satellites haute résolution et d'une couche de noms de rues pour une clarté totale.
* **⚠️ Radar Pulse™** : Alertes visuelles et sonores prédictives via l'API Overpass (données temps réel OpenStreetMap).
* **🧭 Orientation Dynamique** : Bascule entre le mode **Nord** et le mode **Direction** avec rotation fluide à 360°.
* **💎 HUD Glassmorphism** : Interface cockpit futuriste avec horloge temps réel déportée et effets de transparence.
* **⚙️ Control Center** : Réglage de la distance d'alerte (200m - 2000m) et gestion dynamique du volume sonore.
* **🌐 Résilience PWA** : Service Worker intégré pour une performance stable même en zone blanche.

---

### 🛠️ Architecture Technique

| Composant | Technologie | Rôle |
| :--- | :--- | :--- |
| **Moteur Map** | `Leaflet.js` | Rendu cartographique et gestion des couches. |
| **Données** | `Overpass API` | Extraction spatiale des radars en temps réel. |
| **Audio** | `Web Audio API` | Synthèse de bips d'alerte natifs sans latence. |
| **Précision** | `GeometryUtil` | Calcul mathématique des angles d'approche. |

---

### 🚀 Installation & Déploiement

1.  **Hébergement** : Nécessite un serveur **HTTPS** (obligatoire pour la géolocalisation).
2.  **Fichiers** :
    * `index.html` : L'interface utilisateur et le moteur logique.
    * `sw.js` : Gestionnaire de cache pour le mode hors-ligne.
    * `manifest.json` : Configuration pour l'installation sur smartphone/Tesla.
3.  **Lancement** : Ouvrez l'URL et utilisez l'option **"Ajouter à l'écran d'accueil"** pour supprimer la barre d'adresse.

---

### 📖 Mode d'Emploi Rapide

* **Audio Sync** : Appuyez sur **"ACTIVER AUDIO"** au démarrage pour débloquer les alertes sonores.
* **Lock GPS** : Utilisez le bouton **"GPS"** pour verrouiller la vue sur votre véhicule.
* **Calibration** : Ajustez vos préférences dans le menu **"Engrenage"** selon votre environnement.
* **Validation** : Un bouton discret **"TEST"** permet de vérifier l'alerte visuelle et sonore.

---

> [!CAUTION]
> ### 🛑 Sécurité Routière
> **TeslaPilot** est un outil d'assistance. Ne manipulez jamais l'application en conduisant. Respectez les limitations de vitesse et le code de la route en vigueur.
