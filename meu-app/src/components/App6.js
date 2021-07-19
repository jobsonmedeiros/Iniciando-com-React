import React from 'react';

class App6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  };
// Vamos usar o método para procurar no sessionStorage do navegador
// se ele tem um valor para o nome.
  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    // Se nome = undefined então false
    if(nome) this.setState({nome});
    }

  changeTxtNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }

  // Vamos aproveitar para colocar o nome no sessionStorage quando
  // o usuário clicar no botão salvar:
  persistTxtNome = () => {
    this.setState({ nome: this.state.txtNome });
    sessionStorage.setItem('nome', this.state.txtNome);
  }
  
  render() {
    const renderForm = () => {
      return (
        <>
          Nome: <input type='text' onChange={this.changeTxtNome} />
          <button onClick={this.persistTxtNome}>Salvar</button>
        </>
      )
    };

    const renderText = () => (<p>Olá {this.state.nome}</p>);

    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App6;