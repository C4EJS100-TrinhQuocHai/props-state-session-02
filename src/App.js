import React, { Component } from 'react'
import Search from './components/Search'
import ListProducts from './components/ListProducts'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      listProducts: [
        {
          name: "iphone 5",
          price: "$5000",
        },
        {
          name: "quan ao",
          price: "$6000",
        }, {
          name: "sach",
          price: "$7000",
        },
        {
          name: "ban sach tinh te",
          price: "$8000",
        }
      ],
      search:"",
    }
  }
   getData=(keySearch)=>{
    console.log("keysearch",keySearch);
    this.setState({
      search: keySearch
    })
  }
  render() {
    let resultDataSearch=[];
    if(this.state.search!=""){
       resultDataSearch = this.state.listProducts.filter((item) => {
        return item.name.toLowerCase().includes(this.state.search)
      })
    }else{
      resultDataSearch = [...this.state.listProducts];
    }
    console.log("resultDataSearch", resultDataSearch);
    return (
     <>
        <Search dataSearchProduct={this.getData}></Search>
        <ListProducts dataListProducts={resultDataSearch}></ListProducts>
     </>
    )
  }
}
