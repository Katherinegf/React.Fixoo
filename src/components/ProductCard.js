import React from 'react'
import {NavLink} from 'react-router-dom'


const ProductCard = ({item}) => {

  const addToWishList = (e) => {
    console.log (`${e.target}added to wish list`)
    fetchData();
  }
  const addToCompare = (e) => {
    console.log ("added to compare")
  }
  const addToCart = (e) => {
    console.log ("added to shopping list")
    fetchData();
  }

  const fetchData = async () => {
    const URL = "https://win22-webapi.azurewebsites.net/api/products?take=4"
    const data = await fetch(URL); 
    const object = await data.json();
    console.log(object)
 }

  return (
    <div className="col">
        <div className="card">
        <div className="card-img">
        <NavLink className="menu-link" to="/categories" end><img src={item.img} alt={item.name} /></NavLink>
               
                <div className="card-menu d-xl-none">
                    <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                    <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    QUICK VIEW
                    </NavLink>
            </div>
         
            <div className="card-body">
               <p className="card-category">{item.category}</p>
               <h5 className="card-title">{item.name}</h5>
              <p className="card-rating">
              <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
               </p>
                  <p className="card-price">{item.price}</p>
             </div> 
              
    </div>
</div>
  )
}

export default ProductCard