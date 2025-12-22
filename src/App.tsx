import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cloudflareLogo from './assets/Cloudflare_Logo.svg'
import { Button } from '@/components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('unknown')

  return (
    <>
      <div className='logo-container'>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://workers.cloudflare.com/' target='_blank'>
          <img src={cloudflareLogo} className='logo cloudflare' alt='Cloudflare logo' />
        </a>
      </div>
      <h1>Vite + React + Hono + Shadcn </h1>
      <div className='card'>
        <Button
          onClick={() => setCount((count) => count + 1)}
          aria-label='increment'
          className="custom-button"
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className='card'>
        <Button
          onClick={() => {
            fetch('/api/')
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name))
          }}
          aria-label='get name'
          className="custom-button"
        >
          Name from API is: {name}
        </Button>
        <p>
          Edit <code>worker/index.ts</code> to change the name
        </p>
      </div>
      <p className='read-the-docs'>
        Quick start for lean and fast cloudflare workers full stack projects
      </p>
    </>
  )
}

export default App
