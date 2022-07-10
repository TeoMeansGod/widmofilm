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
        return (<li className=''>{item}</li>)
    })

    return (
        <div className='flex justify-center flex-col text-center min-h-60 p-3 rounded-xl border'>
            <span className='flex flex-col'>
                <img src={image} alt="ikonka" className='aspect-square max-h-16 object-contain' />
                <h5 className='text-xl'>{title}</h5>
            </span>
            {special ?
                <ol className='m-auto list-disc'>
                    {skillsList}
                </ol> :
                <ul className='m-auto'>
                    {skillsList}
                </ul>
            }
        </div>
    )
}

export default Skill;