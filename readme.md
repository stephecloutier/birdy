# Birdy

Birdy est une application réalisée avec React-Native. Elle permet à un utilisateur d'enregistrer des sessions de capture d'oiseaux avec leurs informations (bague, poids, longueur alaire, _etc._). L'utilisateur peut aussi consulter ses captures et les modifier.

L'application permet aussi à l'utilisateur de consulter une encyclopédie d'oiseaux

## Fonctionnalités et screens de l'application

* Connexion d'un utilisateur
* Création d'un compte
    * Validation de l'isn avec une regexp (client) et une règle sur la base de données
* Visualisation de tous les oiseaux (Encyclopédie)
* Visualisation de la fiche d'un oiseau (Encyclopédie -> oiseau)
* Création d'une nouvelle séance de capture (Faire une capture)
    * Date actuelle, méthode de capture, longitude + latitude
        * Vérifications des champs avec regexp avant la création
* Ajout d'oiseaux à une séance de capture (Faire une capture -> ajouter un oiseau)
    * Numéro de bague, nom latin, longueur alaire, poids, indice de masse adipeuse, sexe, âge
        * Vérifications des champs avec regexp avant l'enregistrement
    * Lors de l'enregistrement, retour sur l'écran de capture avec les informations de la capture (date + méthode) et listing des oiseaux déjà capturés.
        * Possibilité d'ajouter un nouvel oiseau ou de terminer la séance de capture
* Listing des oiseaux déjà capturés par l'utilisateur connecté (Mes captures)
* Modification d'un oiseaux du listing (Mes captures -> oiseau)
    * Champs préremplis avec les données de la database


## Utilisation de l'application
Pour vous connecter à l'application, utilisez mes identifiants [stephclou4@gmail.com / motdepasse] ou créez-vous un compte avec un numéro isn suivant le format requis (AA22BB)

Une fois connecté, l'utilisateur arrive sur l'écran d'accueil. On lui propose de faire une nouvelle capture ou de consulter ses captures précédentes. Ces options et d'autres (encyclopédie et déconnexion) sont accessibles par le **menu**.

**Menu**
Le menu déploit une *drawer navigation* dans laquelle se trouvent les éléments suivants:
* Accueil
* Faire une capture
* Mes captures
* Encyclopédie
* Déconnexion


## Technologies
J'ai choisi d'utiliser **redux** afin de gérer le state de l'application (par les actions et reducer). Je n'ai ainsi pas eu à me tracasser de passer des props lors de ma navigation. 

Pour ce qui est de cette dite navigation, j'ai utilisé **react-navigation**. Mon application comporte plusieurs navigations imbriquées :  *Stack Navigation > Drawer Navigation > Stack Navigation*

J'ai pu mettre en place cette navigation avec mon store redux et l'authentification firebase grâce aux tutos suivants:
* [React navigation + redux + authentification](https://hackernoon.com/a-comprehensive-guide-for-integrating-react-navigation-with-redux-including-authentication-flow-cb7b90611adf)
* [React navigation + authentification](https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c)
* [React navigation + nested drawer navigation + redux](https://shift.infinite.red/react-navigation-drawer-tutorial-a802fc3ee6dc)
* [React navigation + nested drawer navigation + redux + custom drawer navigation](https://shift.infinite.red/react-navigation-drawer-tutorial-part-2-9c382217ac6b)

Tout ce setup permet à mon application d'avoir une navigation avant la connexion (entre la page login et register), puis une navigation *drawer* accessible depuis tous les écrans lorsque l'utilisateur est connecté. Les *stack* navigation supplémentaires permettent de rendre la navigation intuitive entre écran concernant les mêmes ressources (ex.: encyclopédie -> page individuelle d'un oiseau)

Enfin, j'ai utilisé le middleware redux-thunk afin de pouvoir faire des requête asynchrones dans mes actions

## Aperçu de la base de données firebase
![alt text](https://github.com/stephecloutier/birdy/blob/master/apercu_firebase/root.png)

![alt text](https://github.com/stephecloutier/birdy/apercu_firebase/birds.png)

![alt text](https://github.com/stephecloutier/birdy/apercu_firebase/capture_sessions.png)

![alt text](https://github.com/stephecloutier/birdy/apercu_firebase/single_captures.png)

![alt text](https://github.com/stephecloutier/birdy/apercu_firebase/users.png)