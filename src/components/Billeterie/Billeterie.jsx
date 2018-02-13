import React, { Component } from 'react';


import './Billeterie.css';


class Billeterie extends Component {


  render() {


    return (
      <div className="billeterie">
        <form className="billeterie-buy-form 1day" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="3NVYENRURGVTN" />
          <div className="billeterie-buy-image"></div>
          <h4>Pass 1 jour : 7,5€</h4>
          <input type="hidden" name="currency_code" value="EUR" />
          <span><button className="billeterie-buy-button" type="submit" name="submit" >Acheter</button></span>
          <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
        </form>

        <form className="billeterie-buy-form 2days" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="HJ7RATGB4JGU6" />
          <div className="billeterie-buy-image"></div>
          <h4>Pass 2 jours : 12,5€</h4>
          <input type="hidden" name="currency_code" value="EUR" />
          <button className="billeterie-buy-button" type="submit" name="submit" >Acheter</button>
          <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
        </form>

      </div>
    );

  }



}


export default Billeterie;
