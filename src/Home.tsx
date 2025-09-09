import type { FC } from 'react'

import TopBar from './Components/TopBar';
import not_a_cult_img from './assets/notacult.gif'
import doggo_img from './assets/doggo.jpeg'

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div>
      <TopBar/>
      <div className='overflow-y-auto'>
        <div className='flex p-10 gap-10'>
          <img src={doggo_img} className='max-w-2/5 rounded-lg'/>
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
              Why you should join.
            </h1>
            <div className='p-1 font-mono'>
              Because the sign is sigma, and we're cool. Duh!
            </div>
          </div>
          <img src={not_a_cult_img} className='max-w-2/5 rounded-lg'/>
        </div>  
      </div>
      
    </div>
  )
}

export default HomePage
