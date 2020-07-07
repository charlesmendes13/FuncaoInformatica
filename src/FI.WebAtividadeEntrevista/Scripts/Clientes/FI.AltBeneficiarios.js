(function ($) {
    alterarBeneficiario = function (valueCPF, valueNome) {

        let cpf = valueCPF;
        let nome = valueNome;

        $('#CPF_').val(cpf);
        $('#Nome_').val(nome);

    };
})(jQuery);