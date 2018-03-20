/**
 * Created by jlmconsulting on 3/10/18.
 */
import React, {Component}  from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import {
    Scene,
    Router,
    Actions,
    Lightbox
} from 'react-native-router-flux';
import {Provider} from 'mobx-react/native'
import SplashPage from '../KF-Splash-BP'
import HomePage from '../KF-Home-BP'
import SingleProduct from '../KF-SingleProduct-BP'
import Bag from '../KF-Bag-BP'
import Wishlist from '../KF-Wishlist-BP'
import Conversations from '../KF-Conversations-BP'
import DeliveryDetail from '../KF-DeliveryDetail-BP'
import Notifications from '../KF-Notifications-BP'
import DeliveryMap from '../KF-DeliveryMap-BP'
import Messages from '../KF-Messages-BP'
import Seller from '../KF-Seller-BP'
import Nav from '../KF-Nav-BP'
import NavDrawer from './KF-Nav/navDrawer'
import navBar from './KF-Nav/navBar'

// import ImageLightbox from './KF-Lightbox';

// import Store from '../Store'

class App extends Component {

    render() {
        console.disableYellowBox = false
        return (
                <Router>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="SplashPage" component={SplashPage} panHandlers={null} initial={true}/>
                        <Scene key = "navDrawer" drawer contentComponent = {NavDrawer}>
                        <Scene key = "home" tabs = {true} hideTabBar = {true} panHandlers = {null} navBar = {navBar} swipeEnabled = {true}>
                            <Scene key="HomePage" component={HomePage} title="HomePage"/>
                            <Scene key="SingleProduct" component={SingleProduct} title="SingleProduct" />
                            <Scene key="Bag" component={Bag} title="Bag" />
                            <Scene key="Wishlist" component={Wishlist} title="Wishlist" />
                            <Scene key="Conversations" component={Conversations} title="Conversations" />
                            <Scene key="DeliveryDetail" component={DeliveryDetail} title="DeliveryDetail" />
                            <Scene key="Notifications" component={Notifications} title="Notifications" />
                            <Scene key="DeliveryMap" component={DeliveryMap} title="DeliveryMap" />
                            <Scene key="Messages" component={Messages} title="Messages" />
                            <Scene key="Seller" component={Seller} title="Seller" />
                            <Scene key="Nav" component={Nav} title="Nav" />
                        </Scene>
                        </Scene>
                    </Scene>
                </Router>
        )
    }
}

export default App