import React from 'react';

class App2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className="box">
        <h1>Componente 2</h1>
        <div className="title">{this.props.title}</div>
        <div className="text">{this.props.children}</div>
    </div>);
  }
}

export default App2;