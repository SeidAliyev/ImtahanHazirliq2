import React from 'react'
import { useEffect } from 'react'
import "./foods.scss"
import { useSelector, useDispatch } from 'react-redux'
import { setFood,setFav,setBasket } from '../../../Redux/Features/foodSlicers'
import axios from 'axios'

const Foods = () => {

  useEffect(() => {
   axios.get("http://localhost:5000/api/food").then((res)=>dispatch(setFood(res.data)))
  }, [])
  

  const myfood = useSelector((state) => state.foods.food)
  const myfav = useSelector((state) => state.foods.favFood)

  const dispatch = useDispatch()

  return (
    <div className='myFoods'>
      {myfood&&myfood.map((elem,index)=>{
        return(
        <div key={index} className='food'>
          <button onClick={()=>dispatch(setBasket(elem))}>add basket</button>
        <button onClick={()=>dispatch(setFav(elem))}
        className={(myfav.find(item=>item._id==elem._id)) ? "redbut" : "whitebut"}
      >{elem.title}</button>
        <p>{elem.description} ........................ {elem.price}$</p>
      </div>  
        )
      })}
      

    </div>
  )
}

export default Foods
