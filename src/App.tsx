import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import TopBar from './Components/TopBar';
import DropDown from './Components/TextDropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TopBar userImageUrl='https://i.imgur.com/gzlhqFt.jpeg'/>
    </div>
  )
}

export default App
