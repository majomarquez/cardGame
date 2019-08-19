import React, {Component} from 'react';
import './Card.css';
import FlipCard from 'react-flipcard-2'; // da vueta la carta


class Card extends Component {
    render(){
        return(
             <div className="card" onClick ={this.props.cardSelection}> {/* cuando el usuario haga click  llama al metodo seleccionar carta  */}
                <FlipCard>
                    flipped={this.props.comparing || this.props.youHit} {/* si la carta eesta volteada  si esta siendo comparada o si y ala adivino */}
                    disable ={true} {/*desabilitar que la carta se voltee en hover*/}
                <div className ="home"></div>
                <div className ="inCard">{/* lo que va a contener el icono  */}
                <i className={`fa ${this.props.icon} fa-5x`}></i> {/* revisar video 9  */}
                </div>
                </FlipCard>
            </div>



        )
    }
}



export default Card;