import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'fa fa-users',
    title: 'Usuários',
    subitle: 'Cadastro de usuários: incluir, listar, alterar e excluir.'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Componente usuário
            </Main>
        )
    }
}