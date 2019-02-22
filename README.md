# redux-learning

- Redux, c'est quoi ? 
- Comment l'utiliser avec React ? 

> Chapitre 1 : * Rappel :  Qu'est ce qu'un state en React ?

Avant de se lancer dans l'apprentissage de Redux, il faut deja bien comprendre ce qu'est le state 
en React. 

Enfaite, il faut comprendre qu'en React le state correspond à l'état de l'application.
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
 
 Tout l'état de l'app est dans un seul et même endroit, le store ( on en parlera plus tard)
  
  Il permettra :
   - de rendre le projet plus performant,
   - simplifier la lisibilité des états (state), son accès sera plus rapide à retrouver. Évidement ce n'est pas ce qui en fait toute sa principale utilité.
   - La fameuse particularité de REDUX est surtout sa gestion d'état dans un seul et même endroit, une gestion qui se gère en dehors de React et qui permettra à React de pouvoir gérer n'importe quel state en la rendant indépendante dans chaque composant. 
     

> Chapitre 3 : Vif du sujet (Store, Reducers, Actions, Méthode du store)

## Le store

  Nous y voila ! Le store ? C’est de la magie, que dis-je de l’art ! 
  C’est simple, tout l’état de l’app est dans le store.
  
  Maintenant la question, comment crée le store qui va contenir toute la donnée ? 
  
  Et bien c’est createStore(), une fonction de redux qui va permettre de le crée, il va prendre un reducer en argument. 
  
  Un reducer ? On va y venir ! 
  
  Le state de l’app est crée par les reducers ! Ils renvoient un objet state qui est le paramètre de notre createStore !
  
 ### Exemple :
 
 Dans cette exemple, on retrouve notre createStore() qui prend en paramètre rootReducer, le reducer qui va retourner l'état de l'application. PS: le deuxième paramètre, c'est une extension, qui va nous permettre de voir et gérer redux dans notre application à partir de l'inspecteur. 
 
 ```javascript
 import { createStore } from "redux";
 import rootReducer from "../reducers/index";
 import { composeWithDevTools } from "redux-devtools-extension";
 
 const store = createStore(rootReducer,composeWithDevTools());
 
 export default store;
 
 ```
 
 ## Les reducers
 
 On a compris que le state viens des reducers.
 
 Un reducer ? C’est tout simplement une fonction qui prend en paramètre l’état actuel de l’app et une action  ( nous allons parler des actions plus tard ).
 
 Son job ? retourner l'état de l'app qu'il soit initial ou nouveau.
 
 Un exemple, vous en dira plus !

### Exemple :


 ```javascript
import {SHOW_MODAL} from '../constants/action-types';
import {ADD_ELEMENT} from '../constants/action-types';
import {HANDLE_CHANGE} from '../constants/action-types';



const initialState = {
    modal: false,
    text : '',
    array: []
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                modal: action.bool,
            }
        }

        case HANDLE_CHANGE: {
            return {
                ...state,
                text: action.value
            };
        }

        case ADD_ELEMENT: {
            return {
                ...state,
                array: [...state.array, action.element],
            };
        }
    }

    return state;
};


export default rootReducer;

  ```
  
  Ici, notre reducer à un état initial avec une modal, un text et un tableau en clé d'objet.
  Notre reducer (rootReducer) prend en param§tre l'état initiale et un action. 
  Avec les intructions switch case, on va évaluer chaque action et modifier le bout d'état associé à l'action pour finalement retourner le nouvel état ! ( on pourrait aussi faire du if.. else)
  
  ### Note importante 
  
  En redux, l'état est immuable ! On ne peut pas directement changer l'état comme on ferait avec un setState. Autrement dit, on ne peut pas modifier l'objet original ! 
  
  L'astuce que nous utilisons dans l'exemple :
    - c'est de faire une copie de l'objet initial, nous retournons donc un nouvel objet ( on peut utiliser les spread operator mais aussi Object.assign)
    
    
  ## Les actions 
  
  Pour changer le state, il n’y a qu’un seul moyen, c’est d’envoyer un signal au store ! Ce signal c’est une action. On appelle ça Dispatch une action.
  Les actions vont aider le reducer à savoir à quel moment elle produira le nouvel état, cela dépendra de chaque action. 
  
  Comment écrire les actions ?
  
  Les actions ne sont que des objects JavaScript !
  Chaque action prend une clé type pour décrire comment le state va changer. 
  Elle prend aussi une donnée, par exemple : une string à ajouter dans un tableau ou encore un booléen qui sera amener à changer.
  
  ### Exemple :
  
   ```javascript
export const SHOW_MODAL = "SHOW_MODAL";
export const ADD_ELEMENT = "ADD_ELEMENT";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
   ```
  
  
   ```javascript
  import {ADD_ELEMENT} from "../constants/action-types";
  import {SHOW_MODAL} from "../constants/action-types";
  import {HANDLE_CHANGE} from "../constants/action-types";
  
  export const addElement = (elementToAdd) => {
      return {type: ADD_ELEMENT, element: elementToAdd}
  };
  
  export const showModal = () => {
      return {type: SHOW_MODAL, bool: true}
  };
  
  export const handleChange = (value) => {
      return {type: HANDLE_CHANGE, value: value}
  };
  ```

Chaque action est un objet, par exemple, l'action SHOW_MODAL, dispose d'une donnée bool à true. Notre store dispose d'une state modal à false. Notre reducer va utiliser cette action pour passer le state à true lorsque celle ci sera dispatch.


## Les actions 

  Il existe des méthodes redux qui nous permettre de gérer l'état:
    - getState() => accéder à l'état actuel du store
    - dispatch() => envoyer une action
    - subscribe() => écouter les changements d'état
    
    
### Exemple :

   ![StoreMethods](http://image.noelshack.com/fichiers/2019/08/5/1550831365-capture-d-ecran-2019-02-22-a-11-28-57.png)
   
   On voit sur cette capture d'écran, les différentes méthodes utiliser dans la console.
   
   - On accède à l'état de notre app, on voit que modal est à false.
   - On utilise subscribe, pour savoir quand un changement sera fait dans le store.
   - On dispatch l'action de type "SHOW_MODAL" qui a une donnée à true.
   - On re-accéde à l'état de l'app, on voit que notre modal est passé en true, c'est le reducer qui en récupérant l'action associé s'en est occupé.
   
   
> Chapitre 4 : Connection React-Redux et Application
