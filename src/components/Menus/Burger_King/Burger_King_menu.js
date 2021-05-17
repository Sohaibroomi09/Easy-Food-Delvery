import React from "react";

import "./Burger_King_menu.css";

const Burger_King_menu = () => {
    return (
      <div className="BurgerKing_menu_bg">
        <ul className="BurgerKing_MenuCard">
          {products.map((product) => {
            return(
              <li key={product._id}>
              <div className="BurgerKing_Item1">
              <div className="BurgerKing_prod1">
                <img className="picture1" src={product.image}></img>
                <div className="item_info">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="order_button">Add to cart</div>
                </div>
            </div>
  
            {/* <div className="BurgerKing_prod1">
            <div className="picture1"></div>
                <div className="item_info">
                    <h2>Whopper Burger</h2>
                    <p>Special discount of 40%</p>
                    <div className="order_button">Add to cart</div>
                </div>
            </div> */}
          </div>
          </li>
            )
          })}
            
          
  
          {/* <div className="BurgerKing_Item1">
            <div className="BurgerKing_prod1">
            <div className="picture1"></div>
                <div className="item_info">
                    <h2>Whopper Burger</h2>
                    <p>Special discount of 40%</p>
                    <div className="order_button">Add to cart</div>
                </div>
            </div>
  
            <div className="BurgerKing_prod1">
            <div className="picture1"></div>
                <div className="item_info">
                    <h2>Whopper Burger</h2>
                    <p>Special discount of 40%</p>
                    <div className="order_button">Add to cart</div>
                </div>
            </div>
          </div>
  
          <div className="BurgerKing_Item1">
            <div className="BurgerKing_prod1">
            <div className="picture1"></div>
                <div className="item_info">
                    <h2>Whopper Burger</h2>
                    <p>Special discount of 40%</p>
                    <div className="order_button">Add to cart</div>
                </div>
            </div>
  
            <div className="BurgerKing_prod1">
            <div className="picture1"></div>
                <div className="item_info">
                    <h2>Whopper Burger</h2>
                    <p>Special discount of 40%</p>
                    <div className="order_button">Add to cart</div>
                </div>
            </div>
          </div> */}
        </ul>
      </div>
    );
  };

export default Burger_King_menu;