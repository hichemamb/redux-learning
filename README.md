# redux-learning

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

Par exemple, au clique on va modifier notre schoolName par "Harvard"

```javascript
import React, {Component} from 'react';

class Learning extends Component {
    
    state = {
        schoolName: "Hetic"
    };
    
    changeSchoolName = () => {
       this.setState({
            schoolName: "Harvard"
       }) 
    };
    
     render() {
       return (
           <React.Fragment>
             <h1>Salut, bienvenue à {this.state.schoolName}</h1>
             <button onClick={this.changeSchoolName}>Changer le nom</button>  
           </React.Fragment>
       );
     }
   }
   
   export default Learning;

```

![Trivia](https://i.gyazo.com/e6e72900345a4caafc4e766fdfff712a.gif?_ga=2.167367998.1217613337.1549360202-648851519.1549134019)

Pour en savoir plus sur React et le state : https://reactjs.org/docs/state-and-lifecycle.html
> Chapitre 2 : Quels problèmes résoud Redux ?

 Avec React, un état est propre a son composant, du coup vous imaginez le nombre de state qu'une application pourrait avoir s'il on avait un paquet de composants ? 
 
 Et bien oui beaucoup ! D'autant plus, qu'un state peut se passer en props puis props et encore en props s'il on utilise les composants fonctionnel
 qui sont stateless.
   
 Cependant, il y a Redux, qui lui va apporter LA FORCE, LE POUVOIR à React, en effet il dispose du state de toute l'application 
 et va pouvoir donner à chaque composant le bout d'état dont il a besoin ? Génial non ? 
 
 Tout l'état de la WebApplication est dans un seul et même endroit, le store ( on en parlera plus tard)
  
  Il permettra :
   - de rendre le projet plus performant,
   - simplifier la lisibilité des états (state), son accès sera plus rapide à retrouver. Évidement ce n'est pas ce qui en fait toute sa principale utilité.
   - La fameuse particularité de REDUX est surtout sa gestion d'état dans un seul et même endroit, une gestion qui se gère en dehors de React et qui permettra à React de pouvoir gérer n'importe quel state en la rendant indépendante dans chaque composant. 
     

> Chapitre 3 : Vif du sujet (Store, Reducers, Actions)

### Le store

  Nous en voila ! Le store ? C’est de la magie, que dis-je de l’art ! 
  
  C’est simple, tout l’état de l’app est dans le store.
  
  Maintenant la question, comment crée le store qui va contenir toute la donnée ? 
  
  Et bien c’est createStore(), une fonction de redux qui va permettre de le crée, il va prendre un reducer en argument. 
  
  Un reducer ? On va y venir ! 
  
  Le state de l’app est crée par les reducers ! Ils renvoient un objet state qui est le paramètre de notre createStore !
  
 ## Exemple :
 
 Dans cette exemple, on retrouve notre createStore() qui prend en paramètre rootReducer, le reducer qui va retourner l'état de l'application.
 
 ```javascript
 import { createStore } from "redux";
 import rootReducer from "../reducers/index";
 
 const store = createStore(rootReducer);
 
 export default store;
 
 ```

> Chapitre 4 : Connection React-Redux et Application
