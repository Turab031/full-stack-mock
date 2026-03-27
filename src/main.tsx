import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHED_KEY= import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHED_KEY){
  throw new Error("missing published key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider  publishableKey={PUBLISHED_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)


