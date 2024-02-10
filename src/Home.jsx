import React, { useState } from "react"
import Menu from "./Menu"
import Header from "./Header"
import Card from "./Card"
import Footer from "./Footer"

function Home() {

  const cardObj = [
    { saleBadge:false,
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName:'Fancy Product',
      productReview:false,
      priceMute:false,
      price:'$40.00 - $80.00',
      actionButton:'view options'  
  },

   { saleBadge:true,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'Special Item',
    productReview:true,
    priceMute:true,
    mutedPrice:'$20.00',
    price:' $18.00',
    actionButton:'Add to cart'  
}, 

 { saleBadge:true,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'Sale Item',
    productReview:false,
    priceMute:true,
    mutedPrice:'$50.00',
    price:' $25.00',
    actionButton:'Add to cart'  
}, 

  { saleBadge:false,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'Popular Item',
    productReview:true,
    priceMute:false,
    price:'$40.00',
    actionButton:'Add to cart'  
}, 

  { saleBadge:true,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'Sale Item',
    productReview:false,
    priceMute:true,
    mutedPrice:'$50.00',
    price:' $25.00',
    actionButton:'Add to cart'  
}, 

  { saleBadge:false,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'Fancy Product',
    productReview:false,
    priceMute:false,
    price:'$120.00 - $280.00',
    actionButton:'view options'  
}, 
  
  { saleBadge:true,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'Special Item',
    productReview:true,
    priceMute:true,
    mutedPrice:'$20.00',
    price:' $18.00',
    actionButton:'Add to cart'  
},

  { saleBadge:false,
    image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName:'popular Item',
    productReview:true,
    priceMute:false,
    price:'$40.00',
    actionButton:'Add to cart'  
}
    
  ]

  const [count, setCount] = useState(0);

  return (
    <div>
      <Menu count={count}/>
      <Header/>
      <Card products={cardObj} count={count} setCount={setCount}/>
      <Footer/>
    </div>
  )
}

export default Home
