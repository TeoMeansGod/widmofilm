import React, { HtmlHTMLAttributes } from 'react'

interface SkillProps {
    title: string,
    image: string,
    content: string[],
    special?: boolean,
    bold?: boolean
}

const Skill: React.FC<SkillProps> = ({ title, image, content, special = false, bold = false }) => {
    const skillsList: Array<JSX.Element> = content.map(item => {
        return (<li className='break-words'>{item}</li>)
    })

    return (
        <div className=' text-left p-6 rounded-xl border'>
            <span className='flex flex-col'>
                <img src={image} alt="ikonka" className='aspect-square max-h-16 object-contain' />
                <h5 className='text-xl text-center'>{title}</h5>
            </span>
            <ol className='m-auto list-disc p-2'>
                {skillsList}
            </ol>
        </div>
    )
}

export default Skill;