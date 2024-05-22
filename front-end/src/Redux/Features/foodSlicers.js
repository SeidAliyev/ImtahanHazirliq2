import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    food: [],
    favFood: JSON.parse(localStorage.getItem("favFood")) || [],
    basket :JSON.parse(localStorage.getItem("basket")) || []
}

export const foodSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        setFood: (state, action) => {
            state.food = action.payload
        },
        setFav: (state, action) => {
            const elemIndex = state.favFood.findIndex(elem => elem._id === action.payload._id)
            if (elemIndex === -1) {
                state.favFood = [...state.favFood, action.payload]
                localStorage.setItem("favFood", JSON.stringify([...state.favFood]))
            } else {
                state.favFood = state.favFood.filter(elem => elem._id !== action.payload._id)
                localStorage.setItem("favFood", JSON.stringify([...state.favFood]))

            }
        },
        setBasket:(state, action) => {
            const elemIndex = state.basket.findIndex(elem=>elem._id === action.payload._id)
            if(elemIndex===-1){
                state.basket = [...state.basket,{...action.payload,count:1}]
                localStorage.setItem('basket',JSON.stringify([...state.basket]))
            }else{
                state.basket[elemIndex].count++
                localStorage.setItem('basket',JSON.stringify([...state.basket]))
            }
        },
        removeBasket:(state, action) => {
            state.basket = state.basket.filter(elem=>elem._id !== action.payload._id)
            localStorage.setItem("basket",JSON.stringify([...state.basket]))
        },
        incBasket:(state, action) => {
            const elemIndex = state.basket.findIndex(elem=>elem._id === action.payload._id)
            state.basket[elemIndex].count++
            localStorage.setItem("basket",JSON.stringify([...state.basket]))
        },
        decBasket:(state, action) => {
            const elemIndex = state.basket.findIndex(elem=>elem._id === action.payload._id)
            state.basket[elemIndex].count--
            if(state.basket[elemIndex].count<=0){
                state.basket = state.basket.filter(elem=>elem._id !==action.payload._id)
            }
            localStorage.setItem("basket",JSON.stringify([...state.basket]))
        }
    },
})

export const { setFood, setFav,setBasket,removeBasket,incBasket,decBasket } = foodSlice.actions

export default foodSlice.reducer