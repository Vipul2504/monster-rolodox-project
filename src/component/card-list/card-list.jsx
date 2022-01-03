import './card-list.css';
import React from 'react';
import { Card } from '../Card/Card-component';
export const Cardlist = props => {
    return (<div className='card-list'>
        {props.monster.map(monster=>( <Card key={monster.id} monster={monster}/>))}
    </div>)
}

