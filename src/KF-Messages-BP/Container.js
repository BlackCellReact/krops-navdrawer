/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import MessagesComponent from './Component'
import {Actions} from 'react-native-router-flux'


class Messages extends Component{
    goToWishlist(){
        Actions.Wishlist()
    }
    render(){
        return(
          <MessagesComponent  goToWishlist={this.goToWishlist.bind(this)}/>
        )
    }
}
export default Messages