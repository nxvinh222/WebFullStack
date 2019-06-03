import React, { Component } from 'react';

class ProfilePanel extends Component {
    render() {       
        console.log(this.props.username)
        const display = this.props.username ? (
            <div>
                <span className="navbar-text"> Welcome, {this.props.username}</span>
            </div>
        ) : (
            <button
                className="btn btn-primary btn-block"
                onClick={()=>{this.props._onLogin()}}
            >
                Login
            </button>
        );
        return <div className="col-3 profile_panel text-right">{display}</div>
    }
}

export default ProfilePanel;