import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { productData, productDataTwo } from "./components/Products/Data";
import Feature from "./components/Feature/Feature";
import Restaurants from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Products heading="Premium Deals" data={productData} />
            <Feature />
            <Products heading="Best Dessert Deals" data={productDataTwo} />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
