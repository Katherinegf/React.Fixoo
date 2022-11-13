import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import FeaturedProducts from '../views/FeaturedProducts'

const FeaturedProducts = ({ item }) => {
    const { incrementQuantity } = useShoppingCart()

    // card-menu onClick-events
    const addToWishList = (e) => {
        console.log("added to wish list");
    }
    const addToCompare = (e) => {
        console.log("added to compare");
    }




  

export default FeaturedProducts