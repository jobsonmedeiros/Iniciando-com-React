import React from 'react';

class App extends React.Component {

    render() {
        return (
            <>
                
                <p>{new Date().toLocaleDateString("pt-BR")}</p>
                <h1>Componente 1</h1>
                <p>Meu primeiro parágrafo em React.</p>
                <p>Meu segundo parágrafo.</p>
                <pre>Cansei de parágrafos...</pre>
                <div>

                </div>

            </>
        );
    }
}

export default App;