import React, { FC, useState } from 'react'

interface UserIconProps {
    userImageUrl: string,
    className?: string,
}

const UserIcon: FC<UserIconProps>  = ({ className, userImageUrl }) => {
    const [clicked, setClicked] = useState(false);
    return (
        <img src={userImageUrl} className={`text-white w-12 h-12 rounded-full ${className}`}>
        </img>
    )
}

export default UserIcon