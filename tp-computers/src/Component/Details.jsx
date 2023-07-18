import React from 'react'
import { useParams } from 'react-router-dom'

function Details(props) {
    const {id} = useParams();
    const produits = props.products.find((ite)=> ite.id == id);

  return (
    <div className="container"> 
        <h2 className="mt-3">{produits.title}</h2>

        <div className="">

            <div className="ratio ratio-16x9 w-50 h-50">
                <iframe width="853" height="480" src={produits.video} title={produits.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="">
                <p><b>RAM: </b>{produits.ram}</p>
                <p><b>Brand: </b>{produits.brand}</p>
                <p><b>Screen: </b>{produits.screen}</p>
                <p><b>System: </b>{produits.system}</p>
                <p><b>Item Weight: </b>{produits.Item_Weight}</p>
                <p><b>Resolution: </b>{produits.Resolution}</p>
                <p><b>Total USB: </b>{produits.Total_USB}</p>
            </div>
        </div>
    </div>
  )
}

export default Details