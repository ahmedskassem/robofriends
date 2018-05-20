import React from 'react';

class SearchBox extends React.Component {
    render(){
        return (
            <div>
            <input className="pa3 ba b--green bg-lightest-blue w5" type="search" placeholder="Search by name or Email" onChange={this.props.searchChange}/>
            </div>
        );
    }
}

export default SearchBox;