import React, { Component } from 'react';
import config from '../config'

class girlPictures extends Component {
    render() {
        return (
            <div className = 'col-4'>
                <img 
                    className="img-fluid"
                    src={this.props.img.image} 
                    alt={this.props.img.title}/>
                <h4>
                    {this.props.img.title}
                </h4>
            </div>
        );
    }
}

export default girlPictures;