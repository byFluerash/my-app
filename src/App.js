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
import Navigation from './components/Navigation';
import FixedTelegramLink from './components/FixedTelegramLink';

function App() {
  return (
    <div>
      <FixedTelegramLink />
      <Navigation />
      <section id="header">
      <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="venue">
        <Venue />
      </section>
      <section id="transfer">
        <Transfer />
      </section>
      <section id="color-scheme">
        <ColorScheme />
      </section>
      <section id="gifts">
        <Gifts />
      </section>
      <section id="rsvp">
        <Rsvp />
      </section>
      <Footer />
    </div>
  );
}

export default App;
