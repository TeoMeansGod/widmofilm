import React from 'react'

function HeaderContent() {
    return (
        <>
            <div className='flex flex-row'>
                <img src="" alt="aparacik i zdjecia" />
                <span>
                    <h1 className='text-white text-7xl'>WIDMOFILM</h1>
                    <h2 className='text-white text-3xl'>Korekcja kolorów i wiele więcej</h2>
                    <button className='text-[#67B7E4] bg-white rounded-full p-2'>Zobacz co potrafię!</button>
                </span>
                <img src="" alt="chlopak co stoi na rece" />
            </div>
            <div className='flex justify-center'>
                <img src="" alt="panienka co muzyki slucha" />
            </div>
        </>
    )
}

export default HeaderContent