import type { FC } from 'react'

interface UserIconProps {
    userImageUrl: string,
    className?: string,
}

const UserIcon: FC<UserIconProps>  = ({ className, userImageUrl }) => {
    return (
        <img src={userImageUrl} className={`text-white w-12 h-12 rounded-full ${className}`}>
        </img>
    )
}

export default UserIcon