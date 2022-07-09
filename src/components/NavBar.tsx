import React from 'react'

function NavBar() {
    return (
        <div className='flex justify-around items-center'>
            <img src="../legitka.jpg" alt="logo" className='aspect-square object-cover max-h-24' />
            <div className='flex gap-2 text-xl text-white'>
                <span><a>Home</a></span>
                <span><a>Oferta</a></span>
                <span><a>O mnie</a></span>
                <span><a>Portfolio</a></span>
                <span><a>Kontakt</a></span>
            </div>
        </div>
    )
}

export default NavBar