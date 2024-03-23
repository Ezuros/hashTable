async function cadastrarUsuario(cpf, nome, celular, email) {
    try {
        const usuario = {
            cpf: cpf,
            nome: nome,
            celular: celular,
            email: email
        };

        const response = await fetch('http://localhost:8080/usuarios/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            document.getElementById('resultadoCadastro').innerText = 'Usuário cadastrado com sucesso!';
        } else {
            document.getElementById('resultadoCadastro').innerText = 'Erro ao cadastrar usuário: ' + response.statusText;
        }
    } catch (error) {
        document.getElementById('resultadoCadastro').innerText = 'Erro ao cadastrar usuário: ' + error.message;
    }
}

// Função para buscar um usuário por CPF
async function buscarUsuarioPorCPF(cpf) {
    try {
        const response = await fetch(`http://localhost:8080/usuarios/${cpf}`);
        if (response.ok) {
            const usuario = await response.json();
            document.getElementById('resultadoBusca').innerText = 'Usuário encontrado: ' + JSON.stringify(usuario);
        } else {
            const mensagemErro = await response.text();
            document.getElementById('resultadoBusca').innerText = 'Erro ao buscar usuário: ' + mensagemErro;
        }
    } catch (error) {
        document.getElementById('resultadoBusca').innerText = 'Erro ao buscar usuário: ' + error.message;
    }
}
