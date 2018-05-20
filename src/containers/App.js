import React from 'react';
import BoxList from '../components/BoxList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import Scroll from '../containers/Scroll';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onChangeSearch = (e) => {
        this.setState({searchfield: e.target.value});
        console.log(this.state.searchfield);
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
            <h1>RoboFriends!</h1>
            <SearchBox searchChange={this.onChangeSearch}/>
            <Scroll>
            <BoxList robots={filteredRobots}/>
            </Scroll>
            </div>
        )
    }
}

export default App;