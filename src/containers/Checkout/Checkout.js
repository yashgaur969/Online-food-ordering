import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'

class Checkout extends Component{
    state = {
        ingredients: null,
        totalprice: 0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price=0;
        for (let params of query.entries()){
            if(params[0]==='price'){
                price=params[1];
            }
            else{
            ingredients[params[0]] = +params[1];
            }
        }
        this.setState({ingredients:ingredients, totalprice: price});
    }

    checkoutCancelledhandler= () => {
        this.props.history.goBack();
    }
    checkoutContinuedhandler= () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledhandler}
                checkoutContinued={this.checkoutContinuedhandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                render={(props)=> (<ContactData ingredients={this.state.ingredients} price={this.state.totalprice} {...props}/>)} />
            </div>
        )
    }
}

export default Checkout;