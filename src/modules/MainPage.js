import React, { Component } from 'react';

// Custom component Import -- STARTS
import NavBarComponent from './NavBarComponent/NavBarComponent';
import MainContanier from './MainContainer/MainContainer';
import Footer from './Footer/Footer';
// Custom component import -- ENDS 

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <>
                <div>
                    <NavBarComponent />
                </div>
                <div style={{ marginTop: '64px' }}>
                    <MainContanier />
                </div>
                <div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default MainPage;