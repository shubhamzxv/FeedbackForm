"use client"
import React, { useState } from 'react'

const PraiseOptions = () => {
    const praiseWords = ["Inspiring", "Honest", "Kind","Adventurous","clean"];
    const [selectedValues, setSelectedValues] = useState([]);
    const [hover, setHover] = useState(null);

    const handleSelection = (currentVal) => {
        if (selectedValues.includes(currentVal)) {
            setSelectedValues(selectedValues.filter(value => value !== currentVal));
        } else {
            setSelectedValues([...selectedValues, currentVal]);
        }
    }

    return (
        <div className='flex space-x-4 flex-wrap'>
            {praiseWords.map((word, index) => {
                const currentVal = index + 1;
                return (
                    <label key={index} className="flex items-center cursor-pointer">
                        <input
                            type='checkbox'
                            value={currentVal}
                            checked={selectedValues.includes(currentVal)}
                            onChange={() => handleSelection(currentVal)}
                            className='hidden'
                        />
                        <div
                            className='p-2 px-5 my-1 rounded-full'
                            style={{
                                backgroundColor: selectedValues.includes(currentVal) || currentVal === hover ? "#5BCA7A" : "#e4e5e9",
                                color: selectedValues.includes(currentVal) || currentVal === hover ? "#fff" : "#000",
                            }}
                            onMouseEnter={() => setHover(currentVal)}
                            onMouseLeave={() => setHover(null)}
                        >
                            {word}
                        </div>
                    </label>
                )
            })}
        </div>
    )
}

export default PraiseOptions
