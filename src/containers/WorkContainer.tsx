import React from 'react'
import Work from '../components/Work'

function MyWorkContainer() {
    return (
        <div className='flex justify-center text-3xl bg-[#67B7E4] flex-col items-center gap-36 pb-64'>
            <h4 className='text-white'>Ostatnie Prace</h4>
            <Work side='left' img='../legitka.jpg' />
            <Work side='right' img='../legitka.jpg' />
        </div >
    )
}

export default MyWorkContainer