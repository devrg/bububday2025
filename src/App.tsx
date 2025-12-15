import Hero from './components/HeroSection';
import Message from './components/Message';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Message />
      <Gallery />
      <Countdown />
      <Footer />
    </>
  );
}