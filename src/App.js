import './App.css';

import {Route} from 'react-router-dom'
import AboutMe from './AboutMe'
import HomePage from './HomePage'
import Projects from './Projects';
import ContactMe from './ContactMe'

function App() {
  return (
      <main className='App'>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutMe}/>
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={ContactMe}/>
      </main>
  );
}

export default App;
