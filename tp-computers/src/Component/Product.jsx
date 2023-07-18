import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {

  return (
    <div className='container'>
        <h1>Laptops:</h1>   
        <div className="row">
            {props.products.map((pro, index)=>{
                return(
                    <div className="card col-md-3 me-3 mt-2" key={index}>
                        <img src={pro.picture} className="card-img-top h-100" alt={pro.title} />
                        <div className="card-body">
                            <h3 className="card-title">{pro.title}</h3>
                            <h4 className="card-text">|{pro.price}</h4>
                            <Link className='' to={`/details/${pro.id}`}><button type="button" className="btn details w-50 ">Details</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Product