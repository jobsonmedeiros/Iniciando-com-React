import React from 'react';

class App3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nome : 'g' }
    }
    render() {
        return (
            <>
            <label>Digite seu nome: </label><input type="text" value={this.state.nome}></input>
            <br/>
            <p>Olá, {this.state.nome}</p>
            </>
        );
    }
}

export default App3;