import React, { useEffect, useState } from 'react';
import init from 'scroll-animations-js';
import 'scroll-animations-js/src/css/main.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [curAnimation, setCurAnimation] = useState('sa-animation sa-fade-down');
  console.log(init);
  useEffect(() => console.log(curAnimation), [curAnimation]);
  useEffect(() => init(), []);

  const curAnimationHandler = param => {
    window.location.reload();
    setCurAnimation(param);
  };
  return (
    <div>
      <Header curAnimationHandler={curAnimationHandler} />
      <Contents name={curAnimation} />
      <Footer />
    </div>
  );
}

export default App;
