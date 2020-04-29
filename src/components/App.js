import React , {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './Header';
import Beers from './Beers'

class App extends Component {
    constructor(){
        super()
        this.state = {
            beers: []

        };
        
    }

    getBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers', {
            "method": "GET",
            "headers": {
            }
        }) 
        .then(response => {
            console.log(response.data)
            return this.setState({ beers: response.data})
        })
        .catch(err => {
            console.log(err);
        });
    
    }
    componentDidMount(){

        this.getBeers();
        
    }

render(){
    return (
<div>
    <Header />
<Beers beers ={this.state.beers}/>



</div>


    )
}

}
App.propTypes = {
    beers: PropTypes.array,
    
    
}


export default App