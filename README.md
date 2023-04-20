# Test Technique Monkey Factory

Le résultat est disponible [juste ici](https://pchatard.github.io/mf-technical-test/).

## Objectifs

L'objectif est de créer une application en utilisant React et TypeScript.

Cette application doit présenter :

- Une page d'accueil avec des champs permettant de demander à l'utilisateur :
  - Son prénom
  - Son nom de famille
  - Sa date de naissance
  - Un bouton permettant d'accéder à la seconde page
- Une seconde page affichant :
  - Nom et prénom renseignés dans la page d'accueil
  - Date de naissance avec le nombre de jours avant le prochain anniversaire
  - L'adresse IP de l'utilisateur récupérée via https://www.ipify.org/

## Choix des technologies

- [React](https://react.dev/) + [React Router](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

Tests :

- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/)
- [React Testing Library](https://testing-library.com/)

## En local

- npm install
- npm run dev

## Récap

### Setup

J'ai commencé par mettre en place le projet (GitHub, Vite) et créer une CI de base avec un job de build et un job de deploy.

### Fonctions avec tests unitaires

J'ai ensuite écrit les fonctions avec un peu de logique, fonctions auxquelles j'ai ajouté des tests unitaires avec Vitest :

- Fonction pour calculer le nombre de jours avant l'anniversaire
- Fonctions de validation des inputs

J'ai essayé de faire cette partie en TDD donc cela m'a pris un peu plus de temps que prévu (avec un peu de temps pour setup Vitest et React). J'ai ajouté un job de tests unitaires à la CI.

### Composants

Ensuite, je suis parti sur les composants et principalement mon composant Input en essayant d'écrire des tests dessus aussi.
La création du composant en lui même a été rapide, j'ai pris un peu de temps pour retravailler la gestion du state au niveau du composant root. J'ai choisi un hook custom pour éviter de réécrire trois fois la même chose et j'ai, je pense, réussi à avoir quelque chose de satisfaisant et lisible.
La mise en place du stepper et l'ajout de mes fonctions de validation ont été assez rapide.

### Router et Page de résultat

Assez rapide sur cette partie. J'ai créé une simple fonction qui requête ipify au chargement de la page.
Pour récupérer les infos de la première page, j'ai d'abord pensé à utiliser le Context de React mais j'ai préféré passer les infos via le router, ce qui est beaucoup plus simple pour ce cas assez léger.

### CSS

J'ai pris un peu de temps pour essayer de faire quelque chose de simple mais soigné. Le design en lui même a été rapide, j'ai perdu un peu de temps sur la simulation des temps de chargement entre les inputs, et surtout pour régler les timings des animations.

### Tests End to End

Enfin, j'ai écrit quelques tests End To End avec Cypress et je les ai ajouté à la CI également.

### Ce que je n'ai pas fait

- Afficher des infos sur les erreurs de validation
- Documentation (j'ai commenté certaines méthodes quand même)
