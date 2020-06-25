import React from 'react';
import{Link} from "react-router-dom";
import defaltimag from "../images/room-1.jpeg";
import PropTypes from 'prop-types';
export default function Room({room}) {
    const {name,slug,images}=room;
    return (
        <article className='room'>
        <div className= 'img-container'>
            <img src={images[0] || defaltimag } alt="single room" />
           

                <Link to={`/room/${slug}`} className='btn-primary room-link'>
                featuers
                </Link>

            
        </div>
        <p className='room-info'>{name}</p>
        </article>
    )
} 

Room.propTypes= {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}
