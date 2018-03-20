/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import WishlistComponent from './Component'
import {Actions} from 'react-native-router-flux'


class Wishlist extends Component{
    goToSingleProduct(){
        Actions.PageFour()
    }
    render(){
        return(
          <WishlistComponent  goToSingleProduct={this.goToSingleProduct.bind(this)}/>
        )
    }
}
export default Wishlist