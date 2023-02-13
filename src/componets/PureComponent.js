import React from 'react';
import { Button } from 'react-bootstrap';

class Purecomponent extends React.PureComponent {
    
    constructor() {
        super();
        this.state = { count: 0 }
    }

    render() {
        console.log("This is simple.");
        return (
            <>
                <h1>Hello {this.state.count}</h1>
                <Button onClick={() => this.setState({count : this.state.count  })} className="btn">Upadte conunter</Button>
            </>
        )
    }
}

export default Purecomponent;