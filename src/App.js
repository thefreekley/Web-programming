import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";
import ItemPage from "./components/pages/ItemPage";
import Header from "./components/Header";
import "./accets/css/initial/bolds.css"
import "./accets/css/initial/reset.css"
import "./accets/css/initial/normalize.css"
import "./App.css"
import Footer from "./components/Footer";
import CartPage from "./components/pages/CartPage";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPrinters } from "./redux/actions/printers";
import CheckoutPage from "./components/pages/CheckoutPage";
import SuccessPage from "./components/pages/SuccessPage";


function App() {

  return (
      <div>
          <Router>
              <Header />
              <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/catalog' exact component={CatalogPage} />
                  <Route path='/cart' exact component={CartPage} />
                  <Route path='/item' exact component={ItemPage} />
                  <Route path='/checkout' exact component={CheckoutPage} />
                  <Route path='/success' exact component={SuccessPage} />
              </Switch>

          </Router>
          <Footer/>
      </div>
  );
}

export default App;