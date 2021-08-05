import React from 'react';
import Proportybox from './Proportybox';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';

const Proporties = () => {
    return (
        <div className="product">
            <div className="p-heading">
                <h3>Proporties</h3>
                <p>Lorem dolor sit amet, consectetur adipisicing elit and preciseh</p>
            </div>
            <div className="product-container">
                <Proportybox image={p1} name="GD House" price="$250,000"/>
                <Proportybox image={p2} name=" King House" price="$300,000"/>
                <Proportybox image={p3} name="Burj-al-Hada" price="#400,000"/>
            </div>

        </div>
    )
}

export default Proporties;
