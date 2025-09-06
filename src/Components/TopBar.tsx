import React, { FC, useState } from 'react'
import UserIcon from './UserIcon'
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
                <UserIcon className='text-white w-12 h-12 rounded-full' userImageUrl={userImageUrl}/>
            </div>
        </div>
    )
}

export default TopBar