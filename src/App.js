import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Screens / Components
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FaqScreen from './screens/FaqScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/faq' component={FaqScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
