const React = require('react')

class ThemedDecorations extends React.Component{

     render(){
        return(
          <div>
            {
              React.Children.map(this.props.children,(child)=>{
                 return React.cloneElement(child,{
                    className:"heaven"
                 })
              })
            }
          </div>

        )
     }
}
module.exports = ThemedDecorations
