import React, {Component} from 'react';
import Card from './Card'
import './Game.css';

export default class Game extends Component {
    render(){
        return(
            <div className="game">
                {
                    this.props.allCards
                    .map((card, index) => { // this.props.allCards representa las propiedades que esta enviando el padre, el header. y recibe el map ( la carta)
                            const comparing =this.props.coupleSelection.indexOf(card) >-1; //si  la carta esta en la pareja sellecionada esta siendo comparada  y le decimos eue esta siendo comparada
                                return <Card
                                key={index} // propiedad para ver que elementos cambiaron
                                icon={card.icon}
                                comparing={comparing} // le decimos eue esta siendo comparada
                                cardSelection ={() => this.props.cardSelection(card)} // vamos a invocar  seleccionar carta y le pasamos la carta
                                youHit={card.youHit}
                            />
                        })
                }
            </div>
        );
    }
};



