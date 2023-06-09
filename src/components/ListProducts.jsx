import React, { Component } from 'react'
import Product from './Product';
export default class ListProducts extends Component {
  render() {
       let dataProducts = this.props.dataListProducts;
    //    console.log("data",dataProducts);
    //   let { dataListProducts }=this.props;
    let result= dataProducts.map((item,index)=>{
        return <Product key={index} stt={index} item={item}></Product>
    })
    return (    
     <>
        {result}
     </>
    )
  }
}
