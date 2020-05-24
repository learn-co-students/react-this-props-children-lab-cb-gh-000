// Code ThemedDecoration Component Here
import React, { Component } from "react"

class ThemedDecorations extends Component{
    render(){
        const childrenWithExtraProps = React.Children.map(this.props.children,child=>{
            return React.cloneElement(child,{
                className: this.props.theme
            })
        })
        return(
            <div>{childrenWithExtraProps}</div>
        )
    }
}
export default ThemedDecorations
