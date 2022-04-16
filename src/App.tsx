import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Contents name="target" />
      <Footer />
    </div>
  );
}

export default App;
