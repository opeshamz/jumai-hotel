import React, { Component } from 'react';import defaltbcg from "../images/room-1.jpeg";
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import  defaultBcg from'../images/room-1.jpeg'
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import Styledhero from '../Components/Styledhero'


export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };

    }
static contextType = RoomContext
    componentDidMount(){
            

    }
    render() {
        const {getRoom}= this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className='error'>
                <h3> no such room found</h3>
                <Link to ='/rooms' className ="btn-prymary">
                back to rooms
                </Link>
            </div>
        }
         
        const{name,description,capacity,size,price,extras,breakfast,pets,images}=room
        return (<>
            <Styledhero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to='/' className='btn-primary'>
                    book
                    </Link>
                </Banner>
            </Styledhero>
            <section className="single-room">
                <div className="single-room-images">
              {images.map((item,index) => {
                 return <img key={index} src={item} alt={name}/>;
              })}  
              </div>
              <div className="single-room-info">
                  <article className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                  </article>
                  <article className="info">
                      <h3>info</h3> 
                      <h6>price : ${price}</h6>
                      <h6>size : ${size}</h6>
                      <h6>
                          max capacity :{" "}
                          {capacity > 1 ? `${capacity} people`: `${capacity} person`}

                      </h6>
                      <h6>
                          {pets ? "pet allowed" : "no pet allowed"}
                          </h6>
                          <h6> {breakfast && "free breakfast included"}</h6>
                  </article>
              </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className='extras'>
                {extras.map((item,index)=>{
                    return <li key={index}>-{item}</li>
                    })}
                </ul>
            </section>
            </>
        );
    }
}
