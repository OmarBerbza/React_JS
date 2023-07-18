import React from "react";
import BodyPro from "./BodyPro";


function Body(){
    const prod = [
        {
            id: 1, src: 'download.png', alt: 'image1', title: 'Fancy Product', price: '$80.00'
        },
        {
            id: 2, src: 'images (1).png', alt: 'image2', title: 'Special Item', oldPrice: '$20.00', price: '$18.00'
        },
        {
            id: 3, src: 'images (2).png', alt: 'image3', title: 'Sale Item', oldPrice: '$50.00',  price: '$25.00'
        },
        {
            id: 4, src: 'images.png', alt: 'image4', title: 'Popular Item', price: '$40.00'
        }
    ];
    const products = prod.map(pro => <BodyPro key={pro.id} src={pro.src} alt={pro.alt} title={pro.title} oldPrice={pro.oldPrice} price={pro.price} />)


    return(
        <div>
            <center className="bg-dark text-light">
                <h1 className="h">Shop In Style</h1>
                <h6 className="text-secondary">With This Shop Homepage Template</h6>
            </center>
            <div className="container">
                <div className="row">
                    {products}
                </div>
            </div>
        </div>
    );
}   

export default Body