import { HeroSection } from './components/HeroSection'
import { StoreSection } from './components/Stores';

function App() {
  const isVerified = true;

  return (
    <>
    <HeroSection enabled={isVerified} />
    <StoreSection />
    </>
  )
}

export default App
