import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='nav-bar'>
                <div className='logo'>

                    <img src='/images/logo.png' />
                </div>

                <div className='profile'>
                    <img src='/images/profile.png' />
                    <p>Kusalava</p>
                </div>
            </div>
        </>
    )
}

export default Navbar