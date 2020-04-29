import React, {Component} from 'react';

class BeerItem extends Component {
    constructor(props){
        super()
        this.state = {
        

        };
        
    }

    render(){
        return (
            <div style={{paddingLeft : '15%'}} key={this.props.idx}>
                <br></br>
                <div >
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
                <h4 style={{fontWeight:'bold'}}>Pair with: </h4><p> {this.props.item.food_pairing
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

            </div>
        )
    }
}

export default BeerItem