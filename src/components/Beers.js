import React, {Component} from 'react';
import BeerItem from './BeerItem';
import BeerImage from './BeerImage';
import PropTypes from 'prop-types'

class Beers extends Component {
    constructor(props){
        super()
        
    }

    render(){
        return (
            <div >
                {this.props.beers
.map((item,idx)=>{
    
                return (
                    <div>
                    <div 
                    style={{
                        display:'flex',
                        flexDirection:'row',
                        
        
                    }}
                    key={idx}>
                    
                    <BeerImage item={item} idx={idx}/>
                    <BeerItem  
                    item={item} idx={idx}/>
                    

                    </div>
                    <hr></hr>
                    </div>
                    
                )
            }
            )} 


            </div>
        )
    }
}
Beers.propTypes = {
    beers: PropTypes.array,
    
    
}
export default Beers