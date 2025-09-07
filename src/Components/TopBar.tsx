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
                <div className='flex text-white flex gap-2 space-x-2'>
                    <TextDropDown topText='Products' className='bg-lime-600 text-black rounded-sm w-18 hover:bg-lime-800 text-left'>
                        <a href='/shopping' className='hover:bg-gray-300'>Shopping</a>
                        <a href='/banking' className='hover:bg-gray-300'>Banking</a>
                        <a href='/stocks' className='hover:bg-gray-300'>Stocks</a>
                        <a href='/jobs' className='hover:bg-gray-300'>JOB APPLICATION!!!</a>
                    </TextDropDown>
                    <TextDropDown topText='Government' className='bg-lime-600 text-black rounded-sm w-25 hover:bg-lime-800 text-left'>
                        <a href='/constitution' className='hover:bg-gray-300'>The Constitution</a>
                        <a href='/elections' className='hover:bg-gray-300'>Elections</a>
                        <a href='/laws' className='hover:bg-gray-300'>Laws</a>
                        <a href='/publicofficials' className='hover:bg-gray-300'>Public Officials</a>
                    </TextDropDown>
                    <TopBarButton url='/home' className='bg-lime-600 text-black rounded-sm w-18 hover:bg-lime-800' text='Home'/>
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