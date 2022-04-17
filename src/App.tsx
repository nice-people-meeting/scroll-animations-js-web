import { useEffect, useState } from 'react';
import init from 'scroll-animations-js';
import 'scroll-animations-js/dist/css/index.min.css';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';

function App() {
  const [curAnimation, setCurAnimation] = useState('sa-animation sa-fade-up');

  useEffect(() => init.init(), []);

  const curAnimationHandler = (param: string) => {
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
