import React from 'react'
import "./App.css";
import Card from "./Card";
import Data from './Data';


const App = () => {
    return (
        <>
            <div className='navbar'>
                <div className='nav_titles'>
                    <p className='nav_buttons'>Home</p>
                    <p className='nav_buttons'>About</p>
                    <p className='nav_buttons'>Contact Us</p>
                </div>
                <img className='icon' src='./images/hologram.png' alt='' />
            </div>
            <div className='header_container'>
                <p className='heading'>Top 5 best metaverse projects</p>
                <p className='heading'>for 2022</p>
            </div>

            <div className='tiles_container'>
                {
                    Data.map((val, indx) => {
                        return <Card
                            heading={val.heading}
                            description={val.descrption}
                            image={val.image}
                        />
                    })
                }
            </div>
        <footer>
            <p>Copyright &#169; MyMetaverse</p>
        </footer>
          

        </>
    )
}

export default App;