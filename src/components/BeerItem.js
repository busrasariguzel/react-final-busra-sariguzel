import React, {Component} from 'react';

class BeerItem extends Component {
    constructor(props){
        super()
        this.state = {
        

        };
        
    }

    render(){
        return (
            <div style={{paddingLeft : '15%'}}>
        
                <h3>{this.props.item.name}</h3>
                <div>
                <p style={{fontWeight:'bold'}}> Description : </p> 
                <p>{this.props.item.description}</p>
                </div>
                <div>
                <p style={{fontWeight:'bold'}}>Tips : </p><p>  {this.props.item.brewers_tips}</p>
                </div>
                <div>
                <p style={{fontWeight:'bold'}}>Pair with : </p><p> {this.props.item.food_pairing
.map((item,idx)=>{
    return (
        <div>
            <ul>
                <li>{item}</li>
            </ul>
            </div>

    )
})}
    </p></div>
    <hr  />
            </div>
        )
    }
}

export default BeerItem