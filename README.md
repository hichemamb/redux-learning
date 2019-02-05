# redux-learning

## Que vas tu apprendre ? 

- Redux, c'est quoi ? 
- Comment l'utiliser avec React ? 

> Chapitre 1 : * Rappel :  Qu'est ce qu'un state en React ?

Avant de se lancer dans l'apprentissage de Redux, il faut deja bien comprendre ce qu'est le state 
en React. 

Enfaite, il faut comprendre qu'en React que le state correspond à l'état de l'application.
Un composant React avec un état est en réalité une classe JavaScript ES6. Chacun de ces composants porte son propre état.
Cette état, c'est le state !

On va prendre un exemple : 

```javascript
import React, {Component} from 'react';

class Learning extends Component {
    
    state = {
        schoolName: "Hetic"
    }
    
     render() {
       return <h1>Salut, bienvenue à {this.state.schoolName}</h1>;
     }
   }
   
   export default Learning;

```

Ici on a notre state initial, c'est un objet dans lequel on peut retrouver une clé 
schoolName que l'on rappelle dans le render via this.state pour accéder à l'objet state.

Aussi, le state peut être modifier grâce à la méthode setState.

Pour en savoir plus sur React et le state : https://reactjs.org/docs/state-and-lifecycle.html
> Chapitre 2 : Quels problèmes résoud Redux ?

> Chapitre 3 : Vif du sujet (Store, Reducers, Actions)

> Chapitre 4 : Connection React-Redux et Application


