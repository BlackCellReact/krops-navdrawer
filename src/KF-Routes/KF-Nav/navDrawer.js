import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Platform,
    AsyncStorage,
    Alert
} from 'react-native';


import base from '../themes/BaseStyles';
import Fonts from '../themes/Fonts';

// import DeviceInfo from 'react-native-device-info';


import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Actions } from 'react-native-router-flux';

import _ from 'lodash';


class NavDrawer extends Component {

    constructor(props) {
        super(props);
        this.goto = this.goto.bind(this);
        this.onResetHomeProfilePressed = this.onResetHomeProfilePressed.bind(this);
    }

    onResetHomeProfilePressed() {
        Alert.alert('Logout',
            'Are you sure that you want to logout?',
            [
                {text: 'Cancel', style: 'cancel'},
                {text: 'OK', onPress: () => {
                    this.props.tracker.trackEvent('Logout', 'Success');
                    this.props.actions.resetHomeProfile();
                    setTimeout(() => {
                        AsyncStorage.setItem("homeProfile", "");
                    }, 1000);
                    Actions.drawerClose();}},
            ])
    }

    goto(route) {
        Actions.drawerClose();
        Actions.HomePage();
        // this.props.actions.changeParent(route);
        // if(route == 'Home') {
        //     if(this.props.contextIdStackHome.length > 0) {
        //         this.props.actions.changeContextId(this.props.contextIdStackHome[this.props.contextIdStackHome.length-1]);
        //     }
        //     Actions.homeTab();
        // } else if(route == 'Favourites') {
        //     if(this.props.contextIdStackFavourite.length > 0) {
        //         this.props.actions.changeContextId(this.props.contextIdStackFavourite[this.props.contextIdStackFavourite.length-1]);
        //     }
        //     Actions.favouriteTab();
        // } else if(route == 'Search') {
        //     if(this.props.contextIdStackSearch.length > 0) {
        //         this.props.actions.changeContextId(this.props.contextIdStackSearch[this.props.contextIdStackSearch.length-1]);
        //     }
        //     Actions.searchTab();
        // } else if(route == 'Settings') {
        //     Actions.settingsTab();
        // }
    }

    render() {
        var paddingView;
        // if(Platform.OS === 'ios') {
            // if(DeviceInfo.getModel() == "iPhone X")
                // paddingView = <View style = {{marginTop: 44}} />
            // else
                paddingView = <View style = {{marginTop: 15}} />
        // } else {
        //     paddingView = <View />
        // }
        var logout = (<View />);
        if(this.props.profile != "") {
            logout = (
                <View>
                    <TouchableOpacity onPress = {() => {this.onResetHomeProfilePressed()}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "power-off" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Logout</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />
                </View>
            );
        }
        return (
            <View style = {[styles.drawerContainer, {backgroundColor: this.props.mod}]}>
                {paddingView}
                <ScrollView style = {styles.navScroll}>
                    <TouchableOpacity onPress = {() => {this.goto('Home')}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "home" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    <TouchableOpacity onPress = {() => {Actions.Bag()}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "star" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Bag</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    <TouchableOpacity onPress = {() => {Actions.Wishlist()}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "search" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Wishlist</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    <TouchableOpacity onPress = {() => {this.goto('Settings')}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "cog" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Settings</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    {logout}

                </ScrollView>
            </View>
        )
    }

}

const baseStyles = _.extend(base.general, {
    navScroll: {
        flex: 1
    },
    navItem: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    navIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navTextContainer: {
        justifyContent: 'center',
        marginRight: 10,
        flex: 3
    },
    navText: {
        // fontFamily: Fonts.base,
        fontSize: 16,
    },
    separator: {
        height: 2,
    },
    drawerContainer: {
        alignSelf: 'stretch',
        alignItems: 'stretch',
        flex: 1,
    }
});

const styles = StyleSheet.create(baseStyles);

export default NavDrawer;