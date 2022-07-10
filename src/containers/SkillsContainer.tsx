import React from 'react'
import Skill from '../components/Skill'

function SkillsContainer() {
    return (
        <div className='flex justify-center flex-col items-center'>
            <h3 className='text-3xl'>Czym się zajmuję?</h3>
            <div className='grid grid-cols-3 grid-rows-2 gap-5 mt-10'>
                <Skill title='Produkcja Filmowa' image='../legitka.jpg' content={['Teledyski', 'Filmy Promocyjne', 'Filmy Eventowe', 'Filmy Ślubne', 'Reklamy', 'Spoty', 'Fabuły', 'Filmy Korporacyjne']} />
                <Skill
                    title='Korekcja kolorów'
                    image='../legitka.jpg'
                    content={['Wywołanie Plików RAW', 'Normalizacja', 'Korekcja Kolorów', 'Color Grading', 'Poprawa Wyglądu Skóry', 'Poprawa Stref Ekspozycji']}
                    special={true}
                />
                <Skill title='Pre/Post-Produkcja' image='../legitka.jpg' content={['Stworzenie Koncepcji', 'Napisanie Scenariusza', 'Montaż Filmowy', 'Efekty Specjalne']} />
                <Skill title='Web Dev' image='../legitka.jpg' content={['HTML/CSS', 'JavaScript', 'WordPress', 'Animacje', 'Responsywny Design']} />
                <Skill title='Fotografia' image='../legitka.jpg' content={['Portrety', 'Fotorelacje', 'Zdjęcia Produktowe', 'Reportaże', 'Zdjęcia z Imprez', 'Fotografia Architektoniczna', 'Fotografia Krajobrazowa']} />
                <Skill title='Muzyka' image='../legitka.jpg' content={['Elektroniczna Kompozycja I Produkcja Muzyki']} />
            </div>
        </div>
    )
}

export default SkillsContainer