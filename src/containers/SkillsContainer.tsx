import React from 'react'
import Skill from '../components/Skill'

function SkillsContainer() {
    return (
        <div className='flex justify-center'>
            <h3 className='text-3xl'>Czym się zajmuję?</h3>
            <div className='grid grid-cols-3 grid-rows-2'>
                <Skill title='Produkcja Filmowa' image='../legitka.jpg' content={['dupa', 'cyce']} />
                <Skill title='Korekcja kolorów' image='../legitka.jpg' content={['dupa', 'cyce']} />
                <Skill title='Pre/Post-Produkcja' image='../legitka.jpg' content={['dupa', 'cyce']} />
                <Skill title='Web Dev' image='../legitka.jpg' content={['dupa', 'cyce']} />
                <Skill title='Fotografia' image='../legitka.jpg' content={['dupa', 'cyce']} />
                <Skill title='Muzyka' image='../legitka.jpg' content={['dupa', 'cyce']} />
            </div>
        </div>
    )
}

export default SkillsContainer