import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import './CustomerView.css' 

class CustomerView extends Component {
    constructor() {
        super();
        this.state = {
            customer: {
                name: '',
                street_address: '',
                city: '',
                zip: '',
            },
            type: '',
        }
    }
    goBackBtn = () => {
        this.props.history.push('/')
    }
    handleCustomerChange = (event) => {
        this.setState({
            ...this.state,
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            }
        });
    }

    handleTypeChange = (event) => {
        this.setState({
            ...this.state,
            type: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_INFO', payload: this.state };
        this.props.dispatch(action);
        this.setState({
            customer: {
                name: '',
                street_address: '',
                city: '',
                zip: '',
            },
            type: '',
        });
        this.props.history.push('/checkout');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>Customer Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Name" onChange={this.handleCustomerChange} name="name" />
                    <br />
                    <input placeholder="Street Address" onChange={this.handleCustomerChange} name="street_address" />
                    <br />
                    <input placeholder="City" onChange={this.handleCustomerChange} name="city" />
                    <br />
                    <input placeholder="Zip" onChange={this.handleCustomerChange} name="zip" />
                    <br />
                    <div>
                        <input onChange={this.handleTypeChange} type="radio" id="pickup" value="Pickup" name="type" />
                        <label htmlFor="pickup">Pickup</label>
                        <br />
                        <input onChange={this.handleTypeChange} type="radio" id="delivery" value="Delivery" name="type" />
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                    <button class="next-page" type="submit" value="Next" id="next-button" />
                </form>
                <div>
                    <button class="prev-page" onClick={this.goBackBtn}>
                        Back
                    </button>
                </div>
            </div>
        )
    }
}

export default connect()(CustomerView);