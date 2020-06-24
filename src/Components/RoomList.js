import React from 'react';
import Room from './Room';

export default function RoomList({room}) {
    if (room.length === 0){
    return (<div className="empty-searct">
        <h3>no room matched your search parameters</h3>
    </div>)
    }
    return (
        <div>
           <section className="roomslist">
               <div className="roomslist-center">
                   {room.map(item=>{
                       return <Room key={item.id}room={item}/>
                   })}
               </div>
           </section>
        </div>
    )
}
