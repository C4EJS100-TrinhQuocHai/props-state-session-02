import React, { Component } from 'react'

export default class Search extends Component {
    constructor(){
        super()
        this.state={
            searchData:"",
        }
    }
    handleChange=(event)=>{
         
            this.setState({
                searchData:event.target.value,
            })
    }
    handleClick=()=>{
        // console.log("để comment vô",this.state.searchData);
        this.props.dataSearchProduct(this.state.searchData)
    }
  render() {
    return (
    <>
        <input 
            onChange={this.handleChange}
            type="text" 
            placeholder='tìm tên sản phẩm'
         />
        <button onClick={this.handleClick}> tìm kiếm  </button>
    </>
    )
  }
}
