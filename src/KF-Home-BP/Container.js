/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import HomeComponent from './Component'
import {Actions} from 'react-native-router-flux'


class HomePage extends Component{
    goToSingleProduct(){
        Actions.SingleProduct()
    }
    render(){
        return(
          <HomeComponent  goToSingleProduct={this.goToSingleProduct.bind(this)}/>
        )
    }
}
export default HomePage