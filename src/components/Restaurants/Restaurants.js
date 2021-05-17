import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Burger_King_menu from "../Menus/Burger_King/Burger_King_menu";
import Burger_King from "./Burger_King/Burger_King";
import KFC from "./KFC/KFC";
import Star_Bucks from "./Star_Bucks/Star_Bucks";
import Pizza_Hut from "./Pizza_Hut/Pizza_Hut";
import { BKitems } from "../Menus/Burger_King/BKdata"

import "./Restaurants.css";
import Star_Bucks_menu from "../Menus/Star_Bucks/Star_Bucks_menu";

class Restaurants extends Component  {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/restaurants" exact>
            <div className="background">
              <div className="restaurants">
              {/* eslint-disable-next-line */}
                <Burger_King />
                {/* eslint-disable-next-line */}
                <Star_Bucks />
                <KFC />
                {/* eslint-disable-next-line */}
                <Pizza_Hut />
                <Pizza_Hut />
                <Pizza_Hut />
                <Pizza_Hut />
              </div>
            </div>
          </Route>
          <Route path="/restaurants/burgerking">
            {/* eslint-disable-next-line */}
            {/* <Burger_King_menu products={BKitems}/> */}
          </Route>
          <Route path="/restaurants/starbucks">
            {/* eslint-disable-next-line */}
            <Star_Bucks_menu />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default Restaurants;