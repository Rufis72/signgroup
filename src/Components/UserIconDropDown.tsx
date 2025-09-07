import React, { FC, useState } from 'react'
import UserIcon from './UserIcon'

interface UserIconDropDownProps {
    userIconUrl: string,
    children: React.ReactNode,
    className?: string,
}

const UserIconDropDown: FC<UserIconDropDownProps> = ({ userIconUrl, children, className }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <button onClick={() => setOpen(!open)}>
                <UserIcon userImageUrl={userIconUrl}/>
            </button>
            <div>
                {open && (
                    <div className='absolute mt-1 bg-white border border-gray-300 rounded-sm shadow-lg z-10 right-0'>
                        <div className='flex mt-2 flex justify-end flex-col p-2'>
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserIconDropDown