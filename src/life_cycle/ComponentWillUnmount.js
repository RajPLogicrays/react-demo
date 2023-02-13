import React, { Component } from 'react'

class ComponentWillUnmount extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <h5>componentWillUnmount</h5>
        )
    }
}

export default ComponentWillUnmount