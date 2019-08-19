import shuffle from 'lodash.shuffle' // libreria para mezclar las cartas
import DeviconClass from './deviconClass.js'

const CARD_NUMBER =8;// numero de cartas que quiero que se muestren 

export default()=>{
    const deviconClass =DeviconClass();
    let cards =[]; // cards tiene todas las cartas de la baraja

    while (cards.length < CARD_NUMBER){ // cuando hallan 8 cartas deja de dar cartas
        const index= Math.floor(Math.random() * deviconClass.length); //indice aleatorio para elegir icono
        const card ={
            icon: deviconClass.splice(index, 1)[0], //icono ,  splice extrae la carta que este en el indice  y devuelve un array con un solo elemento
            youHit: false // permite marcarlo como true cuando el usuario encuentre la pareja
        };
        cards.push(card); // empuja la carta a la baraja
        cards.push({...card}); // se empuja nuevamente  pero no al mismo timepo que la otra por eso se clona  con ... , y son 2 objetos distintos
    }
    return shuffle(cards);  //se invoca a shuffle que mezcla las cartas en la baraja , para que no aparescan una al lado del otro 
};