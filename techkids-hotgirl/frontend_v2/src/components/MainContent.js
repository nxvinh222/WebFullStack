import React, { Component } from 'react';
import GirlPictures from './girlPictures'

class MainContent extends Component {
    
    render() {
        const allImage = this.props.posts.map(img => <GirlPictures img={img}/>)
        return (
            <div className="container">
                <div className='row'>
                    {allImage}
                </div>
                
            </div>
        );
    }
}

export default MainContent;