import React from 'react'

interface SkillProps {
    title: string,
    image: string,
    content: string[],
    special?: boolean
}

const Skill: React.FC<SkillProps> = ({ title, image, content, special = false }) => {
    const skillsList: JSX.Element[] = content.map(item => { return (<li>{item}</li>) })

    return (
        <div>
            <img src={image} alt="ikonka" className='aspect-square' />
            <h5>{title}</h5>
            <ul>
                {skillsList}
            </ul>
        </div>
    )
}

export default Skill;