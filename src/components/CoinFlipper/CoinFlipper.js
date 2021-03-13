import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      total: 0,
      yaziSum:0,
      turaSum:0,
    };
  }
  
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.    
    this.setState({flipping:true})
    //random sayı alıp ona göre state'leri güncelledik.
    const random = () => Math.floor(Math.random() *2);
    if(random() === 0){
      this.setState((state) => {
        return {total: state.total + 1, side: "tura", turaSum: state.turaSum + 1};
    });
    } else{
      this.setState((state) => {
        return {total: state.total + 1,side: "yazi", yaziSum: state.yaziSum + 1};
      });
    }
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000)
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.total} </strong>
          atıştan
          <strong> {this.state.turaSum} </strong> tura
          <strong> {this.state.yaziSum} </strong>
           yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
