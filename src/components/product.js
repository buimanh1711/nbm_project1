import React, { Component } from 'react';
import product from '../container/product';
import './product.css';
import data from '../users.json'
import axios from 'axios';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.updateType = '';
        this.newItem = {
            name: '',
            price: null,
            img: null
        }
        this.editIndex = null;
    }

    getName(e, item) {
        item.name = e.target.value
    }

    getPrice(e, item) {
        item.price = e.target.value
    }

    getImg(e, item) {
        item.img = e.target.value;
    }

    adding() {
        this.updateType = 'add';
        this.props.adding();
    }

    editting(index) {
        this.updateType = 'edit';
        this.props.adding();
        this.editIndex = index;
    }

    updateProduct(data, index) {
        console.log(this.updateType)
        if(this.updateType === 'add'){
            this.props.addProduct(data);
        }
        else if(this.updateType === 'edit'){
            this.props.editProduct({product: data, index: index});
        }    
    }

    render() {
        let addClass = 'overlay';
        if(this.props.product.adding) addClass = addClass + " active";

        const products = this.props.product.products;
        return(
            <>
                <button onClick = { this.adding.bind(this) } className='add-btn'>add product</button>
                <div className='products-row'>
                    <div className={addClass}>
                        <div className='product-info'>
                            <span className='close-logo' onClick={ this.props.close}>X</span>
                            <form action='https://www.mocky.io/v2/5cc8019d300000980a055e76'>
                                <input onChange ={ (e)=>{this.getName(e, this.newItem )} }id='product-name' placeholder='name' />
                                <input  onChange ={ (e)=>{this.getPrice(e, this.newItem )} } id='product-price' placeholder='price' />
                                <input name='img' type='file' onChange ={ (e)=>{this.getImg(e, this.newItem )} } id='product-img' placeholder='img'/>
                                <button type ='submit' onClick={()=>this.updateProduct(this.newItem, this.editIndex)} >Submit</button>
                            </form>
                        </div>
                    </div>
                    {   
                        products && products.length > 0 &&   
                        products.map((item, index)=>{
                            if(localStorage.getItem('isLogin'))
                                return (
                                    <div className='product__container' key={ index }>
                                        <div className='product'>
                                            <img src={item.img} className='product-img'/>
                                            <p>{"name: " + item.name }</p>
                                            <p>{"price: "+ item.price }</p>
                                            <span className='delete-btn' onClick={ ()=>this.props.deleteProduct({index: index})}>Delete</span>
                                            <span className='edit-btn' onClick = { this.editting.bind(this, index) } >Edit</span>
                                        </div>
                                    </div>
                                )
                            else {
                                return (
                                    <div className='product__container' key={ index }>
                                        <div className='product'>
                                            <img src={item.img} className='product-img'/>
                                            <span>{"name: " + item.name }</span>
                                            <span>{"price: "+ item.price }</span>
                                        </div>
                                    </div> 
                                )
                            }
                        })
                    }
                </div>
            </>
        )
    }
}