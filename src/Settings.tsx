import TopBar from './Components/TopBar';
import type { FC } from 'react'
import { useState } from 'react';

interface SettingsPageProps {

}

const SettingsPage: FC<SettingsPageProps> = ({}) => {
    // these are the states for which general thing we're in (appearance, etc)
    const [category, setCategory] = useState('appearance')
    // the options for category are as follows:
    // appearance

    return(
        <div className='h-screen flex flex-col'>
            <TopBar />
            <div className='flex flex-1 w-screen'>
                <div className='flex-1 max-w-1/5 p-3 outline-solid'>
                    <button onClick={() => setCategory('appearance')}>Appearance</button>
                </div>
                <div className='overflow-y-auto p-3'>
                    abc
                    def
                    ghi
                    jkl
                </div>
            </div>
        </div>
    )
}

export default SettingsPage