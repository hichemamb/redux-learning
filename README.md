# redux-learning

## Que vas tu apprendre ? 

- Redux, c'est quoi ? 
- Comment l'utiliser avec React ? 

> Chapitre 1 : * Rappel Qu'est ce qu'un state en React ?

> Chapitre 2 : Quels problèmes résoud Redux ?

  Tout d'abord, il faut savoir que React est un framework qui permet de créer des applications web sous un système de composants qui seront génerés et dépendant d'un ou plusieurs état seulement, que l'on appelle "state", un composant est équivaut 
  à un bout de vue qui sera affiché sur la page grâce aux données d'états configurés au préalable.
  Malheureusement dans React, un état est propre a son composant qui sera retranscrit ensuite sur son parent (La vue).
  
  
  Cependant il y a un moyen à "React" de pouvoir détenir, stocker, configurer tout les états de la WebApplication dans un seul et même endroit, ce moyen se nomme "REDUX !"
  
  Il permettra "UN" de rendre le projet plus performant,
  de "DEUX", simplifier la lisibilité des états (state), son accès sera plus rapide à retrouver. Évidement ce n'est pas ce qui en fait toute sa principale utilité.
  La fameuse particularité de REDUX est surtout sa gestion d'état dans un seul et même endroit, une gestion qui permettra à REACT de pouvoir gérer n'importe quel state en la rendant indépendante dans chaque composant, 
  Elle sont stockées dans un fichier que l'on appelle le Store, qui pourront aussi modifiables et filtrés grâce aux reduceurs et en faire une action sans forcément modifié la valeur de l'état de base stockée.

> Chapitre 3 : Vif du sujet (Store, Reducers, Actions)

> Chapitre 4 : Connection React-Redux et Application