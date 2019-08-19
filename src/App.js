import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Game from './Components/Game';
import buildGame from './Utility/buildGame';

const getInitialState =()=>{ //retorna el estado inicial
const allCards =buildGame(); //generamos la baraja e invocamos la info de la baraja
return{ //devuelve las sgtes propiedades
allCards, // devolvemos la baraja
coupleCard: [],//en este array puede haber max 2 elementos
compare:false  // solo se va a mrcar verdadero si las 2 cartas son iguales y marcara falso mientras esta haciendo la comparacion 

}
}
class App extends Component {
  constructor (props){ // se crea el constructor para indicar el estado inicial
    super(props); // se invoca al super
    this.state = getInitialState(); // se indica el estado inicial
  }

  render(){ // conecciones entre el game y el header
  return (
    <div className="App">
      <Header/>
      <Game
      allCards={this.state.allCards} // la propiedad es allCards y hace refeerencia al estado inicial
      coupleCard={this.state.coupleCard} // el tablero notifica a las cartas que estan siendo comparadas y deben vltear
      cardSelection={(card)=>this.cardSelection(card)} //pasamos  el arrow function que recibe la carta  
      />
    </div>
  );
}

cardSelection(card){ // metodo cardSelection recibe una carta 
  if( // condiciones en las que el usuario no deberia seleccionar 
    this.state.compare || // si estamos comparando
    this.state.coupleCard.indexOf(card)>-1|| // si el usuario ya escogio esta carta >-1 si la carta ya estsa en el array de parejas seleccionadas 
    card.youHit //cartas que ya fueron adivinadas
  ){
    return;
  }

  const coupleCard =[...this.State.coupleCard,card];// utilizamos la carta que esta llegando en el metodo para actualizar las parejas que estan siendo selecionadas , se crea un nuevo array con las cartas que ya estan en el estado y se agrega la nueva 
  this.setState({ // se actualiza el estado
    coupleCard //la propiedad es la pareja seleccionada
  })
  if (coupleCard.length ===2){
    this.compareCouple(coupleCard)
}
}
compareCouple (coupleCard){
  this.setState({compare:true});

  setTimeout (()=>{
    const [firthCard, secondCard]= coupleCard;
    let allCards =this.state.allCards;

    if  (firthCard.icon === secondCard.icon) {
      allCards=allCards.map((card)=>{
      if (card.icon !== firthCard.icon){
        return card;
      }
      return {...card, youHit:true};
    });
  }
  this.setState({
    coupleCard: [],
    allCards,
    compare:false,
  })
  },1000)
}
}
export default App;
