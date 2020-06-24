import React, { Component } from 'react'
import Title from './Title';
import { MdFitnessCenter,MdWifi } from "react-icons/md";
import {FaCoffee,FaCocktail} from "react-icons/fa";

export default class Services extends Component {
        state={
            services:[
                {
                    icon:<MdWifi />,
                    title:"wifi",
                    details:'we give free 24 hours wifi to our custormers'

                },
                {
                    icon:<MdFitnessCenter />,
                    title:"gym",
                    details:' we have well equipped Fitnes center to keep our custormers fit'

                },
                {
                    icon:<FaCoffee />,
                    title:"coffe",
                    details:'we give free morning coffe to our custormers'

                },
                {
                    icon:<FaCocktail />,
                    title:"cocktail",
                    details:'we give free morning cocktail to our custormers'

                }
            ]
        }
    render() {
        return (
            <section className="services">
                <Title title='Free services'/>
                <div className='services-center'>
                {this.state.services.map((item,index) =>{
                return <article  key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.details}</p>
                    </article>  
                })}
                </div>
               
            </section>
        )
    }
}
