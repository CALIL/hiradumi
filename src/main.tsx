import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hiradumi from './Hiradumi'

const rows = new Array(10000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 100))

const columns = new Array(10000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 100))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hiradumi rows={rows} columns={columns} />
  </StrictMode>,
)
