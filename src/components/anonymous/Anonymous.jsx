import React from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'user-secret',
    title: 'Usuário Secreto',
    subtitle: 'Um usuário secreto que ninguém sabe sua identidade.'
}

export default function Anonymous(props) {
    return (
        <Main {...headerProps}>
            Quem será o usuário secreto?!
        </Main>
    )
}