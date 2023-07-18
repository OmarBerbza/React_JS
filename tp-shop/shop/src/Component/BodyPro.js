import React from "react";


function BodyPro(props){
    return(
        <div className="col-md-3 col-ms-6s">
            <div className="card m-2 mt-4">
                <span className="sale border">{props.sale}</span>
                <img src={props.src} className="card-img-top p-2" alt={props.alt} />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-secondary"><span className="price">{props.oldPrice}</span> {props.price}</p>
                    <a href="#" className="btn btn border">Add To Cart</a>
                </div>
            </div>
        </div>
    );
}

export default BodyPro