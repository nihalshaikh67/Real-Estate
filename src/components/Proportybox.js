import React from 'react'

const Proportybox = (props) => {
    return (
        <div className="p-box">
            <img src={props.image} alt="product"></img>
            <p>{props.name}</p>
            <a href="#" className="price">{props.price}</a>
            <a href="#" className="buy-btn">Add to Cart</a>
        </div>
    )
}

export default Proportybox
