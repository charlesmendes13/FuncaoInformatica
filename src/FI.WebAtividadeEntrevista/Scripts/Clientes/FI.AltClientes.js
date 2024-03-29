﻿$(document).ready(function () {    

    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #CPF').val(obj.CPF);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);

        let beneficiarios = obj.Beneficiarios;

        sessionStorage.setItem("beneficiarios", JSON.stringify(beneficiarios));

        obj.Beneficiarios.forEach(function (e) {
            let contentRow = `<tr id="${e.CPF_}">
                                <td>${e.CPF_}</td>
                                <td>${e.Nome_}</td>
                                <td class='text-center mx-auto'>
                                    <button id="alterarBeneficiario" name='alterarBeneficiario' class='btn btn-warning' data-id='${e.CPF_}' onclick="alterarBeneficiario('${e.CPF_}', '${e.Nome_}')">Alterar</button> 
                                    <button id="excluirBeneficiario" name='excluirBeneficiario' class='btn btn-danger' data-id='${e.CPF_}' onclick="excluirBeneficiario(this)">Excluir</button> 
                                </td>
                            </tr>`;

            $('#tabelaBeneficiarios tbody').append(contentRow);
        });
    }

    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        let beneficiarios = sessionStorage.getItem("beneficiarios") == "" ? [] : JSON.parse(sessionStorage.getItem("beneficiarios"));

        $.ajax({
            url: urlPost,
            method: "POST",
            data: {
                "NOME": $(this).find("#Nome").val(),
                "CEP": $(this).find("#CEP").val(),
                "Email": $(this).find("#Email").val(),
                "Sobrenome": $(this).find("#Sobrenome").val(),
                "Nacionalidade": $(this).find("#Nacionalidade").val(),
                "CPF": $(this).find("#CPF").val(),
                "Estado": $(this).find("#Estado").val(),
                "Cidade": $(this).find("#Cidade").val(),
                "Logradouro": $(this).find("#Logradouro").val(),
                "Telefone": $(this).find("#Telefone").val(),
                "Beneficiarios": beneficiarios
            },
            error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success:
            function (r) {
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();                                
                window.location.href = urlRetorno;
            }
        });
    })

    $("#CPF").mask("999.999.999-99");
    $("#CEP").mask("99999-999");
    $("#Telefone").mask("(99) 99999-9999");
    $("#CPF_").mask("999.999.999-99");
})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}