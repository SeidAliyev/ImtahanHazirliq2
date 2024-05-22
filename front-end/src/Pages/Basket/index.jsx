import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFood, setFav, incBasket, removeBasket, decBasket } from '../../Redux/Features/foodSlicers'

const Basket = () => {
  const basket = useSelector((state) => state.foods.basket)
  const dispatch = useDispatch()
  
  let totalprice = 0

  if (basket) {
    basket.forEach(elem => {
      totalprice += (elem.price * elem.count)
    })
  }
  return (
    <div >
      <p>{totalprice}</p>
      {basket && basket.map((elem, index) => {
        return (
          <div key={index} >
            <span
            >{elem.title}</span> <button onClick={() => dispatch(incBasket(elem))}>+</button><button onClick={() => dispatch(decBasket(elem))}>-</button><span>Quantity:{elem.count}</span><button onClick={() => dispatch(removeBasket(elem))}>remove basket</button>
            <p>{elem.description} ........................ {elem.price}$</p>
            <p>tOtal:{elem.price*elem.count}$</p>
          </div>
        )
      })}


    </div>
  )
}

export default Basket
