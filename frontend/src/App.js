import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreeen from './screens/HomeScreeen';

function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>     
            <header className='row'>
                <div>
                    <a className ='brand' href="/"> Amazona</a> 
                    
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href='/signin'>Sign in</a>
                </div>
            </header>
                <main>
                  <Route path='/product/:id' component={ProductScreen}></Route>
                  <Route path='/' component={HomeScreeen} exact></Route>
                </main>
                <footer className="row center">
                    All right reserved
                </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
