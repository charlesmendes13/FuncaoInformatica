$('#formBeneficiarios').submit(function (e) {
    e.preventDefault();

    const _cpf = $('#CPF_').val();
    const _nome = $('#Nome_').val();

    if (!ValidationCPFAttribute(_cpf)) {

        ModalDialog("Ocorreu um erro", "Digite um CPF válido");

    } else {

        if (VerificarExistenciaBeneficiario(_cpf)) {

            ModalDialog("Ocorreu um erro", "CPF já cadastrado");

        } else {

            let beneficiarios = sessionStorage.getItem("beneficiarios") == "" ? [] : JSON.parse(sessionStorage.getItem("beneficiarios"));

            let novoBeneficiario = { "CPF_": _cpf, "Nome_": _nome };
            beneficiarios.push(novoBeneficiario);

            sessionStorage.setItem("beneficiarios", JSON.stringify(beneficiarios));

            let contentRow = `<tr id="${e.CPF_}">
                                <td>${novoBeneficiario.CPF_}</td>
                                <td>${novoBeneficiario.Nome_}</td>
                                    <td class='text-center mx-auto'>
                                    <button id="alterarBeneficiario" name='alterarBeneficiario' class='btn btn-warning' data-id='${e.CPF_}' onclick="alterarBeneficiario('${novoBeneficiario.CPF_}', '${novoBeneficiario.Nome_}')">Alterar</button>
                                    <button id="excluirBeneficiario" name='excluirBeneficiario' class='btn btn-danger' data-id='${e.CPF_}' onclick="excluirBeneficiario(this)">Excluir</button> 
                                </td>
                            </tr>`;

            $('#tabelaBeneficiarios tbody').append(contentRow);

            $('#CPF_').val('');
            $('#Nome_').val('');
        }
    }
});
