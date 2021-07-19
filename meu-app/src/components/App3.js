import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nome : '' }
        this.changeName = this.changeName.bind(this)
    }
    changeName = function(event){
        this.setState({nome: event.target.value})
    }

    render() {
        return (
            <>
            <label>Digite seu nome: </label><input type="text" value={this.state.nome} onChange={this.changeName}></input>
            <br/>
            <p>Olá, {this.state.nome}</p>
            </>
        );
    }
}

export default App3;