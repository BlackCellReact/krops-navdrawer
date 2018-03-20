/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import BagComponent from './Component'
import {Actions} from 'react-native-router-flux'


class Bag extends Component{
    goToWishlist(){
        Actions.Wishlist()
    }
    render(){
        return(
          <BagComponent  goToWishlist={this.goToWishlist.bind(this)}/>
        )
    }
}
export default Bag