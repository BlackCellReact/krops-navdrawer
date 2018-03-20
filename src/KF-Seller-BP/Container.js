/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import SellerComponent from './Component'
import {Actions} from 'react-native-router-flux'


class Seller extends Component{
    goToWishlist(){
        Actions.Wishlist()
    }
    render(){
        return(
          <SellerComponent  goToWishlist={this.goToWishlist.bind(this)}/>
        )
    }
}
export default Seller