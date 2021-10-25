'use strict';

const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const cepValido = (cep) => /^[0-9]{8}$/.test(cep);

const limparFormulario = () => {
    document.querySelector('#endereco').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('#cidade').value = '';
    document.querySelector('#estado').value = '';

};

const preencherFormulario = async (evento) => {
    const cep = evento.target.value.replace('-', '');
    limparFormulario();
    if (cepValido(cep)){
        const infoCep = await pesquisarCep(cep);
        if (infoCep.erro){
            document.querySelector('#endereco').value = "CEP não encontrado, tente novamente.";
        }else{
        document.querySelector('#endereco').value = infoCep.logradouro;
        document.querySelector('#bairro').value = infoCep.bairro;
        document.querySelector('#cidade').value = infoCep.localidade;
        document.querySelector('#estado').value = infoCep.uf;
        }
    }else{
        document.querySelector('#endereco').value = "CEP invalido, por favor digite um cep valido!";
    }
};

document.querySelector('#cep').addEventListener('focusout', preencherFormulario);





































// const preencherFormulario = (evento) => {
//     const cep = target.value;



// };

//const aluno = {
    //     nome: "Maria",
    //     notas: {
    //         PWFE: 8,
    //         PWBE: 9,
    //         BCD: 3
    //     },
    //     semestre: 3,
    //     email: 'maria@gmail.com',
    // };
    


// const notas = [1, 4, 6]

// const nota1 = notas[0]
// const nota2 = notas[1]
// const nota3 = notas[2]

// const [notaMaria, notaJoao, notaAline] = [1, 4, 6];

// console.log(notaJose);



// const cep = document.querySelector('#cep').value;

// const cep = evento.target.value;
// const infoCep = pesquisarCep(cep)





