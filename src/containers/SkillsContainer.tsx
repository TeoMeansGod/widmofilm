import React from 'react'
import Skill from '../components/Skill'
import skills from '../data/skills.json'

function SkillsContainer() {
    return (
        <div className='flex justify-center flex-col items-center'>
            <h3 className='text-3xl'>Czym się zajmuję?</h3>
            <div className='grid grid-cols-3 grid-rows-2 gap-5 mt-10'>
                <Skill
                    title={skills.data[0].title}
                    image='../legitka.jpg'
                    content={skills.data[0].details}
                />
                <Skill
                    title={skills.data[1].title}
                    image='../legitka.jpg'
                    content={skills.data[1].details}
                    special={true}
                />
                <Skill
                    title={skills.data[2].title}
                    image='../legitka.jpg'
                    content={skills.data[2].details}
                />
                <Skill
                    title={skills.data[3].title}
                    image='../legitka.jpg'
                    content={skills.data[3].details}
                />
                <Skill
                    title={skills.data[4].title}
                    image='../legitka.jpg'
                    content={skills.data[4].details}
                />
                <Skill
                    title={skills.data[5].title}
                    image='../legitka.jpg'
                    content={skills.data[5].details}
                />
            </div>
        </div>
    )
}

export default SkillsContainer