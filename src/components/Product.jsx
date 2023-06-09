import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    // let dataItem=this.props.item;
    let {item,stt}=this.props
    //   console.log("dataItem",dataItem);
    return (
           <table>
                <tbody>
                        <tr>
                            <td> {stt + 1} </td>
                            <td> {item.name}</td>
                            <td> {item.price}</td>
                        </tr>
                </tbody>
           </table>
    )
  }
}
