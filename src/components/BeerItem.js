import React, {Component} from 'react';

class BeerItem extends Component {
    constructor(props){
        super()
        
    }

    render(){
        return (
            <div style={{paddingLeft : '12%'}} key={this.props.item.id}>
                
                <div>
                <br></br>
                <h2>{this.props.item.name}</h2>
                </div><br />
                <div style={{display:'flex', flexDirection:'row' , justifyContent:'left'}}>
                <h4 style={{fontWeight:'bold'}}> Description:  </h4> &nbsp;&nbsp;
                <p>  {this.props.item.description}</p>
                </div><br />
                <div style={{display:'flex', flexDirection:'row' , justifyContent:'left'}}>
                <h4 style={{fontWeight:'bold'}}>Tips: </h4> &nbsp; &nbsp;
                <p>  {this.props.item.brewers_tips}</p>
                </div><br />
                <div >
                <h4 style={{fontWeight:'bold'}}>Pair with: </h4><ul> {this.props.item.food_pairing
.map((item,idx)=>{
    return (
        <div>
        <li>{item}</li>
        </div>

    )
})}
    </ul></div><br></br>

            </div>
        )
    }
}

export default BeerItem