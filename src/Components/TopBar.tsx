import type { FC } from 'react'
import UserIconDropDown from './UserIconDropDown.tsx'
import TopBarButton from './TopBarButton'
import TextDropDown from './TextDropDown'


interface TopBarProps {
    userImageUrl: string,
}

const TopBar: FC<TopBarProps> = ({ userImageUrl }) => {
    return (
        <div className='flex items-center justify-between bg-gray-900 p-4 h-17'>
            <div className='flex items-center'>
                <div className='flex-grow text-white flex space-x-2'>
                    <TopBarButton url='/home' className='bg-lime-600 text-black rounded-sm w-18 hover:bg-lime-800' text='Home'/>
                    <TextDropDown topText='Products' className='bg-lime-600 text-black rounded-sm w-18 hover:bg-lime-800 text-left'>
                        <a href='/shopping' className='hover:bg-gray-300'>Shopping</a>
                        <a href='/banking' className='hover:bg-gray-300'>Banking</a>
                        <a href='/stocks' className='hover:bg-gray-300'>Stocks</a>
                        <a href='/jobs' className='hover:bg-gray-300'>JOB APPLICATION!!!</a>
                    </TextDropDown>
                </div>
            </div>
            <div className='flex items-center-right'>
                <UserIconDropDown userIconUrl={userImageUrl} className='text-right'>
                    <a href='/account' className='hover:bg-gray-300'>Account</a>
                    <a href='/settings' className='hover:bg-gray-300'>Settings</a>
                    <a href='/logout' className='hover:bg-gray-300'>Log out</a>
                </UserIconDropDown>
            </div>
        </div>
    )
}

export default TopBar