import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import LocationDateTime from './components/LocationDateTime'; // Add this import
/*import MessageSection from './components/MessageSection';*/
import Speakers from './components/Speakers';
import ProgramFlow from './components/ProgramFlow';
import Sponsors from './components/Sponsors';
import RegistrationSection from './components/RegistrationSection';
import PostEvaluation from './components/PostEvaluation';
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
      <TopHeader />
      <Header />
      <LocationDateTime /> {/* Add this component */}
      {/*<MessageSection />*/}
      <Speakers />
      <ProgramFlow />
      <Sponsors />
      <RegistrationSection />
      <Footer />
    </div>
  );
}

export default App;