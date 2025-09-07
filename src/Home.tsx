import type { FC } from 'react'

import TopBar from './Components/TopBar';

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div>
      <TopBar userImageUrl='https://i.imgur.com/gzlhqFt.jpeg'/>
    </div>
  )
}

export default HomePage
