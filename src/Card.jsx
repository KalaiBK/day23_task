import React from 'react'
import './Card.css'

function Card({products, count, setCount}) {
    return (
        <div className='container'>
            <div className="row">
            {products.map((product, index) => {
                return <div className="p-4 col-6 col-sm-6 col-md-4 col-lg-3"><div className='card h-100' key={index}>
                    {/* Sale Badge */}
                    {product.saleBadge ? <div><div className="badge bg-dark text-white position-absolute salePosition">Sale</div></div> : <></>}
                    {/* Product Image */}
                    <img className='card-img-top' src={product.image} />
                    {/* Product Details */}
                    <div className='card-body text-center'>
                        {/* Product name */}
                        <h5 className='fw-bolder'>{product.productName}</h5>
                        {/* Product Review */}
                        {product.productReview ? <div class="d-flex justify-content-center small text-warning mb-2">
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                            <div class="bi-star-fill"></div>
                        </div> : <></>}
                        {/* Product Price */}
                        <div>
                            {product.priceMute ? <span className="text-muted text-decoration-line-through">{product.mutedPrice}</span> : <></>}
                            <span className='text-center'>{product.price}</span>
                        </div>
                        {/* Product Actions */}

                    </div>
                    <div className='card-footer text-center bg-transparent border-top-0'>
                        <button className='btn btn-outline-dark mt-auto' onClick={(e) => {
                            switch(e.target.innerHTML){
                                case "view options":
                                    break;
                                case "Add to cart" :
                                    setCount(count+1)
                                    e.target.innerHTML = "Remove from cart";
                                    break
                                case "Remove from cart" :
                                    setCount(count-1)
                                    e.target.innerHTML = "Add to cart";  
                                    break
                            }
                        }}>{product.actionButton}</button>
                    </div>
                </div></div>
            })}
            </div>
        </div>
    )
}

export default Card
