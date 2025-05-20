import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './styles/globals.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Nav } from './components/Nav.tsx'
import { Footer } from './components/Footer.tsx'
import { Theme } from '@radix-ui/themes'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Theme appearance="dark" radius="large">
            <main className="min-h-screen flex flex-col items-center">
              <div className="w-full">
                <Nav />
                <App />
                <Footer />
              </div>
            </main>
          </Theme>
    </QueryClientProvider>
  </StrictMode>,
)
