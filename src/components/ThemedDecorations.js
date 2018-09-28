// Code Invitation Component Here
import React from 'react';

class ThemedDecorations extends React.Component
{
render(){
  return(
<div>
{this.props.children.map(item=>{
  const props = { ...item.props, className: this.props.theme };
return React.cloneElement(item, props, "TEST");


})}
</div>



  )
}

}
export default ThemedDecorations;
