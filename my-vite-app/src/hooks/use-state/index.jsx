import React,{useState} from 'react'

const Counter = () => {
        const [count, setCount] = useState(0)

        const increment =()=>{
                setCount(count+1)
        }
          const decrement =()=>{
                if( count > 0){
                        setCount(count-1)
                }
                
        }
   //    const decrement =()=> count > 0 ? setCount(count-1) : null

  return (




    <div>
                <p> Count: {count} </p>
                <button onClick={increment} >Increment</button>
                <button onClick={decrement}> Decrement</button>
    </div>
  )
}

export default Counter
