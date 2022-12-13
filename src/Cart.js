import React , {useState}from "react";


function Cart(props) {

const [counter, setCounter] = useState(0);


const increment = () => {
    setCounter(count => count + 1)
}
    
const decrement = () => {
    setCounter(count => count - 1)
}
return(
<div >

    <h1> {props.name} </h1>
    <h1>{props.price}</h1>
    <img className="w-40 h-40" src={props.img} alt=""></img>
    <div className="flex border-black border-2 p-2 m-2 w-auto">
        <h2 className="p-2 m-2 mr-1">Quantity:</h2>
    <p className="m-2 p-2">{counter}</p>
    <button className="text-2xl m-2" onClick={increment}>+</button>
    <button className="text-2xl m-2" onClick={decrement}>-</button>
    </div>
    
    <button className="w-20 h-10 border-black border-2 rounded-lg m-2">Buy now</button>
</div>
)
}

export default Cart;