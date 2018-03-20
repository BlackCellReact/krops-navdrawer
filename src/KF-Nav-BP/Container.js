/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import NavComponent from './Component'
import {Actions} from 'react-native-router-flux'


class Nav extends Component{
    goToWishlist(){
        Actions.Wishlist()
    }
    render(){
        return(
          <NavComponent  goToWishlist={this.goToWishlist.bind(this)}/>
        )
    }
}
export default Nav