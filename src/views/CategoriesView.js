import React, { useEffect, useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenu'

const fetchData = async () => {
  const URL = "https://win22-webapi.azurewebsites.net/api/products?take=4"
  const data = await fetch(URL); 
  const object = await data.json();
  return object;
}

const CategoriesView = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const initialFetch = async () => {
      const data = await fetchData();
      setProducts([...data]);
    }
    initialFetch();
  }, [])

  // Har tyvärr inte blivit klar med allting då jag hade så svårt att förstå i början. Men nu har det lossnat en del. Kan kompletera senare men fick till hooks och lifecycles till slut.  
  return (
    <>
       <MainMenuSection /> 

        {
          products.length > 0 && products.map((product) => (
          <div>
            <p>Product price:{products[0].price}</p>
            <img src={product.imageName}/>
          </div>
          ))
        }
       <FooterSection />
    </>
  )
}

export default CategoriesView