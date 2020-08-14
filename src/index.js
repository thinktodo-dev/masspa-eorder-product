import React from 'react'
import styles from './styles.module.css'
import StarIcon from "./images/star.svg"
import StarDefaultIcon from "./images/star_default.svg"
import ShoppingCartIcon from "./images/shopping-cart.svg"
export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }
  changeQuantity = (action) => {
    let newValue = this.state.quantity
    if(action == "decrease") newValue = newValue -1
    else newValue = newValue + 1
    this.setState({
      quantity: newValue
    })
  }
  orderAction = () => {
    if(this.props.orderAction) this.props.orderAction({quantity: this.state.quantity})
  }
  render() {
  let {title,  madeIn, price, featureList, stars = 0, sku, fontFamily= "unset"} = this.props
  let {quantity} = this.state
  return <div className={styles.productContent} style = {{fontFamily: fontFamily}}>
      {title && <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      }
      {stars > 0 && Array.from("12345").map((e, index) => {
        if(index < stars) return <img  className={styles.star} src={StarIcon}></img>
        else return <img className={styles.star} src={StarDefaultIcon}></img>
      })}
      <div className={styles.brand} > 
      {madeIn && <p  className={styles.brand}>Brand: {madeIn}</p>}
      {sku ? <span className={styles.sku} >SKU: {sku}</span> : ""}
      </div> 
      {price ? <p className={styles.price}>{price}</p> : ""}
      {featureList && 
      <ul>
        <li  className={styles.featureItem}>THÔNG SỐ KỸ THUẬT</li>
          {featureList.map((feature, index) => {
            return(
              <li className={styles.featureItem}>{feature}</li>
            )
          })} 
      </ul>}
      <div className={styles.buttonGroup}>
        <div className={styles.quanlityInput}>  
          <button className={styles.quantity} onClick = {() => this.changeQuantity("decrease")}>-</button>
          <input  className={styles.inputQuantity} value={quantity}/>
          <button className={styles.quantity} onClick = {() => this.changeQuantity("increase")}>+</button>
        </div> 
        <button className={styles.buttonOrder} onClick = {() => this.orderAction()}><img className={styles.shoppingCart} src={ShoppingCartIcon}></img>CHỌN MUA</button>
      </div>
    </div> 
}
}
