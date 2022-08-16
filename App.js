//import styles and images
//import{ICON} from 'destination of icon'

import  { GiGrapes  } from 'react-icons/gi';
import  { GiBananaBunch  } from 'react-icons/gi';
import  { GiShinyApple  } from 'react-icons/gi';
import './App.css';

//import data
import stores from './data/stores';
import items from './data/items';

//import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import components
import Navigation from './components/Nav.js';

//import pages
import HomePage from './pages/HomePage.js';
import OrderPage from './pages/OrderPage.js';
import StoresPage from './pages/StoresPage.js';

function App() {  

  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <GiGrapes className="App-grapes" />
        <GiBananaBunch className="App-banana" />
        <GiShinyApple className="App-apple" />
        {/*<img src={logo} className="App-logo" alt="logo"  />*/}
        <h1>Mi Mercado</h1>
        <p>
          An App with Node, Express, and React  
        </p>
        
        
      </header>

      <Navigation />
        <main>
          <article className="App-article">
            {/*<Route path="/" exact><HomePage /></Route>*/}
 
          <Route path="/" exact><HomePage /></Route>
          
          <Route path="/order"><OrderPage items={items} /></Route>
          <Route path="/stores"><StoresPage stores={stores} /></Route>
          </article>
        </main>
     
      <footer> <p> <cite>&copy;Carolina Rodriguez 2022 </cite> </p> </footer>
      </Router>
    </div>
    
  );
}

export default App;
