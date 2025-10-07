import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
/*import MessageSection from './components/MessageSection';*/
import Speakers from './components/Speakers';
import ProgramFlow from './components/ProgramFlow';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <Header />
      {/*<MessageSection />*/}
      <Speakers />
      <ProgramFlow />
      <Footer />
    </div>
  );
}

export default App;