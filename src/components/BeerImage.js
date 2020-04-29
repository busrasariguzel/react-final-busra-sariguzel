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
            }}>
                    <img src={this.props.item.image_url} height="140px" width='60px' />
            </div>
        )


    }
}

export default BeerImage