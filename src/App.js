import './styles/components.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Transfer from './components/Transfer';
import ColorScheme from './components/ColorScheme';
import Gifts from './components/Gifts';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';
import Venue from './components/Venue';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Venue />
      <Transfer />
      <ColorScheme />
      <Gifts />
      <Rsvp />
      <Footer />
    </div>
  );
}

export default App;
