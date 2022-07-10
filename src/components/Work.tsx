import React from 'react'

interface WorkProps {
    side: 'right' | 'left',
    img: string
}

const Work: React.FC<WorkProps> = ({ side, img }: WorkProps) => {

    if (side === 'left') {
        return (
            <div className='flex w-3/5 h-96 rounded-2xl'>
                <div className='w-1/2 bg-white rounded-l-2xl h-1/1 flex flex-col p-9'>
                    <h5 className='text-4xl'>Teledysk - Kartografia</h5>
                    <span className='text-xl'>Lorem ipsum dolor, sit amet</span>
                    <button style={{ background: 'linear-gradient(272.29deg, #119CD4 0%, #B8E7F9 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className='rounded-xl text-white text-xl w-64 h-14 mt-auto'>Zobacz projekt</button>
                </div>
                <div className='w-1/2 bg-[#61C2E0] rounded-r-2xl'></div>
            </div >
        )
    } else {
        return (
            <div className='flex w-3/5 h-96 rounded-2xl'>
                <div className='w-1/2 bg-[#61C2E0] rounded-l-2xl'></div>
                <div className='w-1/2 bg-white rounded-r-2xl h-1/1 flex flex-col p-9'>
                    <h5 className='text-4xl'>Teledysk - Kartografia</h5>
                    <span className='text-xl'>Lorem ipsum dolor, sit amet</span>
                    <button style={{ background: 'linear-gradient(272.29deg, #119CD4 0%, #B8E7F9 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className='rounded-xl text-white text-xl w-64 h-14 mt-auto'>Zobacz projekt</button>
                </div>
            </div>
        )
    }
}

export default Work