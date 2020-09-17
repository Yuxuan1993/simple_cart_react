import React, { Component,useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form";

import ProductView from './productView';
import ModalBtn from "./modal";
import fakeData from '../fakeData';

let newProductList = fakeData;

class cartTableClass extends Component {
  constructor() {
    super();
    this.state = {
      productList:fakeData,
      totalPrice:0,
    }
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.tabs = [];
  }

  handleDeleteRow = (i,e) => {
    let rows = [...this.state.productList]
    rows.splice(i, 1)
    this.setState({ 
      productList: rows
    },() => {
        this.handleTotalPrice();
    });

    console.log("1st: " + this.state.productList);
  };

  handleChange =(event) => {
    //this.setState({value: event.target.value});
    let rows = [...this.state.productList];
    console.log("You choosse: " + event.target.value);
    let i =  event.target.getAttribute("select-index");
    rows[i].quanitity = event.target.value;
    this.setState({ 
      productList: rows
    },() => {
        this.handleTotalPrice();
    });
  }


  handleTotalPrice=()=>{
    var total = 0;
    for(var i=0;i<this.state.productList.length;i++){
      total = total + this.state.productList[i].price * this.state.productList[i].quanitity*(1-this.state.productList[i].discount);
    }
    this.setState({totalPrice:(total.toFixed(2))});
  }

  componentDidMount(){
    this.handleTotalPrice();
  }

  render() {
    return (
      <Table responsive="sm">
        <thead>
        <tr>
            <th>Product</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {this.state.productList.map((product,i) => (
            <tr key={i}>
            <td>
            <ProductView
                    productName={product.name}
                    productDesc={product.description}
                    productImgSrc={product.image}
                  />
            </td>
            <td>
                {(product.discount===0) ? "N/A" : product.discount*100 + "%"}
            </td>
            <td>
            <Form value={this.value}>
              <Form.Group controlId="exampleForm.SelectCustom">
                <select select-index={i} onChange={this.handleChange}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </Form.Group>
            </Form>
            </td>
            <td>{(isNaN(product.price)) ? "N/A" : "$" + (product.price*product.quanitity).toFixed(2)}</td>
            <td>
                <button onClick={e => this.handleDeleteRow(i,e)}>delete</button>
                <button>refresh</button>
            </td>
        </tr>
        ))}
        </tbody>
        <tfoot>
          <tr>
              <th class="hide-xs" scope="row"></th>
              <td class="hide-xs"></td>
              <td class="hide-xs"></td>
              <td>total: $<span class="total">{this.state.totalPrice}</span></td>
              <td class="hide-xs"></td>
          </tr>
          <tr>
            <th><button class="btn btn-warning" type="button"><span class="badge"><i class="mr-2 pg-arrow_left_line_alt"></i></span>Continue Shopping</button></th>
            <td class="hide-xs" scope="row"></td>
            <td class="hide-xs"></td>
            <td class="hide-xs"></td>
            <td><ModalBtn /></td>
          </tr>
        </tfoot>
    </Table>
    );
  }
}


export default cartTableClass;