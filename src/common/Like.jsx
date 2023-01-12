import React, { Component } from 'react';

class Like extends Component { 
    render() { 
        let classes = "fa fa-heart"
        if (!this.props.Like) classes += "-o"
        return (<span onClick={this.props.onClick} style={{cursor:"pointer"}} className={classes}></span>);
    }
}
 
export default Like;