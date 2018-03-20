/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import DeliveryMapComponent from './Component'
import {Actions} from 'react-native-router-flux'


class DeliveryMap extends Component{
    goToWishlist(){
        Actions.Wishlist()
    }
    render(){
        return(
          <DeliveryMapComponent  goToWishlist={this.goToWishlist.bind(this)}/>
        )
    }
}
export default DeliveryMap