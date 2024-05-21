import React from 'react'
import "./home.scss"
import Foods from './Foods'

const Home = () => {
  return (
    <div className='menuBack'>
        <div className='myContent'>
        <h1>Our Menu</h1>
        <div className='menu'>
            <p>Breakfast</p>
            <p>Brunc</p>
            <p>Lunch</p>
            <p>Dinner</p>
        </div>
        <Foods/>
        </div>
    </div>
  )
}

export default Home
