import React from 'react';
import Main from '../template/Main';

export default function Home(props) {
    return (
        <Main icon="home" title="Inicio" subtitle="Segundo Projeto do caítulo React.">
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
        </Main>
    )
}
