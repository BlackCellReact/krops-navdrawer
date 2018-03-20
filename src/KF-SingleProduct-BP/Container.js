/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import SingleProductComponent from './Component'
import {Actions} from 'react-native-router-flux'


class SingleProduct extends Component{
    goToBag(){
        Actions.Bag()
    }
    render(){
        return(
          <SingleProductComponent  goToBag={this.goToBag.bind(this)}/>
        )
    }
}
export default SingleProduct