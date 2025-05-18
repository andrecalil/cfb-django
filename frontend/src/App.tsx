import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './styles/App.css'
import useStores from './hooks/useStores'

function App() {
  const [count, setCount] = useState(0)
  const { data: stores } = useStores();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {stores?.map((store) => (
        <div key={store.id}>
          <h2>{store.name}</h2>
          <p>{store.state}</p>
        </div>
      ))}
    </>
  )
}

export default App
