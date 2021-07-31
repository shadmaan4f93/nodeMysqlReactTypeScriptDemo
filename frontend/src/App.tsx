import React, {useEffect} from "react";
import { connect} from "react-redux";
import {getCart} from "./redux/actions"
import storeType from './redux/types/storeTypes';
import AppPrototypes from './redux/types/AppPrototypes';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import HeaderComponent from './components/Header';
import HomeComponent from './components/Home'; 


const App: React.FC<AppPrototypes> = ({
  carts,
  getCart
}) =>{

	useEffect(() => {
    getCart();
	}, [getCart]);

  return (
    <div className="App">
      <HeaderComponent cart={carts}/>
      <Router>
        <Switch>    
          <Route
            path="/"
            exact
            component={HomeComponent}
          />
        </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps = (state: storeType) => {
	return {
    carts: state.menuReducer.cart
	};
};

export default connect(mapStateToProps, {
  getCart
})(App);


