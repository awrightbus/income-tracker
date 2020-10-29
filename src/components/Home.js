import React from 'react'
import Hero from '../images/hero.png'
import './Home.css'

function Home() {
    
    return (
        <div className='Home'>
            <div className='responsive-image'>
                <img src={Hero} alt='me' width='550' height='700' className='responsive-image-image'/>
            </div>
            
            <div className='cta'>
                <h1>Need to track your income?</h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                <h4 className='home-register'>Register</h4>
            </div>

        </div>
    )
}

export default Home
