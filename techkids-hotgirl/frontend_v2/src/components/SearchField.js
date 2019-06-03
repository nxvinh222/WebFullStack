import React, { Component } from 'react';

class SearchField extends Component {
    _texthandleChange = event => this.props._onSearchChange(event.target.value);
    render() {

        return (
                    <form className='col-3'>
                        <input onChange={this._texthandleChange} className='form-control' type='text' placeholder='Search'/>
                    </form>
               
        );
    }
}

export default SearchField;