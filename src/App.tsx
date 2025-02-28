import { useState } from 'react'
import { GlobalStyles } from './pages/profile/styled'
import Profile from './pages/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <Profile />
    </>
  )
}

export default App
