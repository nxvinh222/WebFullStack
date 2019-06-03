import React, { Component } from 'react';
import logo from '../img/saber.png'

import SearchField from './SearchField.js'
import ProfilePanel from './ProfilePanel'

class NavBar extends Component {
    render() {
        // const test = () => {
        //     console.log("test");
        //     this.props._onLogin();
        // };
        // test();
        // console.log(this.props._onLogin)
        return (
            <div className="navbar">
                <div className="container">                
                    <div className="row">
                        <SearchField 
                            _onSearchChange = {this.props._onSearchChange}
                            />
                        {/* <div className="col-2 text-center">
                            <img  src={logo}/>
                        </div> */}
                        <ProfilePanel 
                            username = {this.props.username} 
                            _onLogin = {this.props._onLogin}/>
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
}

export default NavBar;