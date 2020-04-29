import React, {Component} from 'react';

class BeerImage extends Component {
    constructor(props){
        super()
        this.state = {
        

        };
        
    }

    render(){
        return (
            <div className="image"
            style={{
                alignItems: 'center',
                textAlign: 'center',
                padding:'5%'
            }} key={this.props.idx}>
                    <img src={this.props.item.image_url} height="140px" width='60px' alt='...' />
            </div>
        )


    }
}

export default BeerImage