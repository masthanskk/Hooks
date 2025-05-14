import React, { use, useEffect, useState } from 'react'

const Effects =()=>{
        const[data, setData] = useState([])
        const[ pagred, setPagred ] = useState(false)
        useEffect(()=>{
                fetch('https://dummyjson.com/products')
                .then((res) => res.json())
                .then((json) => {
                        console.log(json.products)
                        setData(json.products)
                
                })
        },[])

        useEffect(()=>{
                        console.log('To check the toggle button')
        },[pagred])                   // here when adding dependency array it does re-render , when using this useeffect dependency changes the re-render

        return(
                <>
                        <button onClick={ ()=> setPagred((prev) => !prev) }> Toggle </button>
                        <p> list Of Products </p>
                        <ul>
                                {data.map((product)=> <li key ={product.id}> 
                                        {product.title} | {product.category} | {product.price}
                                 </li>)}
                        </ul>
                </>
        )
}
export default Effects


/*
import React, { useEffect, useState } from 'react';

const Effects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log('Products from API:', json.products); // log only products
        setData(json.products); // set products in state
      });
  }, []); // <== important to add dependency array here

  return (
    <div>
      <p>List of Products</p>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effects;

*/