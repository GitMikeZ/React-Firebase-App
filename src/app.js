import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA8WzlYLZVmNktrpObCFhy-kVkYDtvCl4M",
            authDomain: "authentication-618c7.firebaseapp.com",
            databaseURL: "https://authentication-618c7.firebaseio.com",
            projectId: "authentication-618c7",
            storageBucket: "authentication-618c7.appspot.com",
            messagingSenderId: "438657927306"
        });
    }

    render() {
        return (
        <View>
            <Header headerText="Authentication"/>
            <LoginForm />
        </View>
        )
    };
};

export default App;