import type { FC } from 'react'

import TopBar from './Components/TopBar';

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div>
      <TopBar userImageUrl='https://i.imgur.com/gzlhqFt.jpeg'/>
      <div className='overflow-y-auto'>
        <div className='flex p-10 gap-10'>
          <img src='https://i.imgur.com/CbCPIxK.jpeg' className='max-w-2/5 rounded-lg'/>
          <div className='w-4/5 text-center'>
            <h1 className='text-9xl'>
              Who are we?
            </h1>
            <div className='p-1 font-mono'>
              No, like seriously. Who the heck are we? And also, why is there a dog to the left? I can answer one of those. {'(well I can answer both, but this one\'s more important)'} We're The Highly Dedicated Sign Enthusiast Group, or Sign for short. We believe in the One True Sign. You could even say... it opened up our eyes. We've started our own government, and this is our website for all our online services including, but not limited to, banking, elections, shopping, jobs, the constitution, and laws. For why there's a dog, I was looking for a placeholder, and the dog seemed good. Except now I like it more than what I might actually put there, so it's staying! And you can't convince me otherwise. Credit to {' '}
              <a href='https://imgur.com/user/PankoBoy' className='underline'>
                PankoBoy on imgur
              </a>
              {' '} for {' '}
              <a href='https://imgur.com/gallery/photo-of-dog-panko-every-day-tfZ53ZM' className='underline'>
                the image
              </a>
              .
            </div>
          </div>
        </div>
        <div className='flex p-10 gap-10'>
          <div className='w-4/5 text-center'>
            <h1 className='text-9xl'>
              Why should you join
            </h1>
            <div className='p-1 font-mono'>
              De lorem ipsum!!!
            </div>
          </div>
          <img src='https://tenor.com/view/cult-gif-23104410' className='max-w-2/5 rounded-lg'/>
        </div>  
      </div>
      
    </div>
  )
}

export default HomePage
