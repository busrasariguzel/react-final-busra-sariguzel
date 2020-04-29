import React, {Component} from 'react';
import BeerItem from './BeerItem';
import BeerImage from './BeerImage';

class Beers extends Component {
    constructor(props){
        super()
        this.state = {
        

        };
        
    }

    render(){
        return (
            <div >
                {this.props.beers
.map((item,idx)=>{
    
                return (
                    <div 
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent: 'space-evenly'
        
                    }}
                    key={idx}>
                    
                    <BeerImage item={item} idx={idx}/>
                    <BeerItem  
                    item={item} idx={idx}/>
                    

                    </div>
                    
                    
                )
            }
            )} 


            </div>
        )
    }
}

export default Beers