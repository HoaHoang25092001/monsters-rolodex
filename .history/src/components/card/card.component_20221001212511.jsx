import { Component } from 'react';

import './card.style.css'

class Card extends Component {
    render() {
        const {name, email, id} = this.props.monster;
        return (
            <div className='card-container'>
            <img alt={`monster ${name}`}
                 src={`https://robohash.org/${id}?set=set2&size=180x180`}      
            />
            <p>{name}</p>
            <p>{email}</p>
            </div>
        )
    }
}

export default Card;
