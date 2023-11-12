import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return(
    <div className="counter">
      <div className="controls">
        <button className="btn btn-dark btn-sm" onClick={decrement}>-</button>
        <h4 className="Number">{quantity}</h4>
        <button className="btn btn-dark btn-sm" onClick={increment}>+</button>
      </div>
      <div> 
        <button className="btn btn-success btn-sm" onClick={() => onAdd(quantity)} disabled={!stock}>
        Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount;


//Este modulo iria dentro del detalle del producto.