import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className='w-full border border-[#D0D5DD] rounded-lg p-6'>
            {!items || items.length === 0 && <p className='text-[#111827] text-center font-semibold text-lg'>No items found</p>}

            {items && items.length > 0 && items.map((item, index) => {
                return (
                    <div className='w-full border-b border-[#D0D5DD] bg-gray-50 rounded-xl mb-4' key={index}>
                        <button
                            onClick={() => handleAccordionToggle(index)}
                            className={`w-full flex justify-between items-center gap-4 cursor-pointer hover:bg-blue-50 p-3 rounded-lg ${activeIndex === index ? 'bg-blue-50' : 'bg-gray-100'}`}
                        >
                            <h4 className='font-semibold text-[#111827]'>{item.title}</h4>
                            <span className={`${activeIndex === index ? 'rotate-180 transition-all duration-300 ease-in-out' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                            </span>
                        </button>
                        {activeIndex === index && <div className='p-4 w-full'>
                            {item.content}
                        </div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion