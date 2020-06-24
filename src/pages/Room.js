import React from 'react'
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';

import RoomContainer from '../Components/RoomContainer';


export const Room = () => {
    return (<>
        <div>
        <Hero hero="roomsHero" >
        <Banner title="Our rooms" /> 
        </Hero>
        </div>
        <RoomContainer />
        </>
    )
}

export default Room;