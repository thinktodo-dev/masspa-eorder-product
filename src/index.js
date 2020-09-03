import React from 'react'
import styles from './styles.module.css'
import StarIcon from "./images/star.svg"
import StarDefaultIcon from "./images/star_default.svg"
import ShoppingCartIcon from "./images/shopping-cart.svg"
import HeartIcon from "./images/heart.svg"
import HeartDefaultIcon from "./images/heart_default.svg"
export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      favorite: false
    }
  }
  changeQuantity = (action) => {
    let newValue = this.state.quantity
    if(action == "decrease") newValue = newValue -1
    else newValue = newValue + 1
    if(newValue < 0 ) newValue = 0
    this.setState({
      quantity: newValue
    })
  }
  changeFavorite = () => {
    if(this.props.changeFavorite) this.props.changeFavorite()
  }
  orderAction = () => {
    if(this.props.orderAction) this.props.orderAction({quantity: this.state.quantity})
  }
  changeInputQuantity = (e) => {
    let newValue = Number(e.target.value)  ? e.target.value : 0
    this.setState({
      quantity: newValue
    })
  }
  render() {
  let {title,  madeIn, price, featureList, stars = 0, sku, fontFamily= "Roboto", favorite = true, customButtomStyle = {}, colorPrice = "#fd0a0a", showFavorite  = false, subTitle1, subTitle2} = this.props
  let {quantity} = this.state
  return <div className={styles.productContent} style = {{fontFamily: fontFamily}}>
      {title && <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      }
      {stars > 0 && Array.from("12345").map((e, index) => {
        if(index < stars) return <img  key = {index} className={styles.star} src={StarIcon}></img>
        else return <img key = {index} className={styles.star} src={StarDefaultIcon}></img>
      })}
      <div className={styles.brandBox} > 
      {madeIn && <p  className={styles.brand}>{subTitle1 || "Brand"}: {madeIn}</p>}
      {sku ? <span className={styles.sku} >{subTitle2 || "SKU"}: {sku}</span> : ""}
      </div> 
      {price ? <p style = {{color: colorPrice}} className={styles.price}>{price}</p> : ""}
      {featureList && 
      <ul className = {styles.featureList}>
        {/* <li  className={styles.featureItem}>THÔNG SỐ KỸ THUẬT</li> */}
          {featureList.map((feature, index) => {
            return(
              <li key = {index} className={styles.featureItem}>{feature}</li>
            )
          })} 
      </ul>}
      <div className={styles.buttonGroup}>
        <div className={styles.quanlityInput}>  
        <div className={styles.titleQuantity}>Số lượng</div>
          <div className={styles.quanlityInput}> 
            <button className={styles.quantity} onClick = {() => this.changeQuantity("decrease")}>-</button>
            <input  className={styles.inputQuantity} value={quantity} onChange = {this.changeInputQuantity}/>
            <button className={styles.quantity} onClick = {() => this.changeQuantity("increase")}>+</button>
          </div>
        </div> 
        <button style = {customButtomStyle} className={styles.buttonOrder} onClick = {() => this.orderAction()}><img className={styles.shoppingCart} src={ShoppingCartIcon}></img>CHỌN MUA</button>
        {showFavorite && <img className={styles.heartIcon} onClick = {() => this.changeFavorite()}  src={favorite ? HeartIcon : HeartDefaultIcon}></img> }
      </div>
    </div> 
}
}
