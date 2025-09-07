import React, { useState } from 'react'
import type { FC } from 'react'

interface TextDropDownProps {
    topText: string,
    children: React.ReactNode,
    className?: string,
}

const TextDropDown: FC<TextDropDownProps> = ({ topText, children, className }) => {
    const [open, useOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <button onClick={() => useOpen(!open)} className='p-2 bg-lime-600 rounded-sm hover:bg-lime-800'>
                {topText}
            </button>
            <div>
                {open && (
                    <div className='absolute mt-1 w-full- bg-white border border-gray-300 rounded-sm shadow-lg z-10'>
                        <div className='flex flex-col p-2'>
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TextDropDown