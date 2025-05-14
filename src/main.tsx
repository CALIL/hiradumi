import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hiradumi from './Hiradumi'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hiradumi height={window.innerHeight} width={window.innerWidth}>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
      <div>Row</div>
    </Hiradumi>
  </StrictMode>,
)
