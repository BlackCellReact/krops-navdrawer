/**
 * Created by devacc2 on 12/03/2018.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import SplashPageComponent from './Component'
import {Actions} from 'react-native-router-flux'


class SplashPage extends Component{

    goToMain(){
        Actions.HomePage()
    }
    componentDidMount() {
        setTimeout(() => {
            Actions.home();
        }, 2000);
    }

    render(){
        return(
          <SplashPageComponent
              goToMain={this.goToMain.bind(this)}
          />
        )
    }
}
export default SplashPage