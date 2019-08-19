import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
render(){
    return(
        <header>
            <div className="title"> Memory Cards </div>
            <div>
                <button className="button-reset">Reinicia el Juego</button>
            </div>
            <div className="title">
                Turnos:
            </div>
        </header>
    )
}
}

export default Header;