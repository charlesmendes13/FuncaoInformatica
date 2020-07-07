(function ($) {
    excluirBeneficiario = function (value) {

        let cpf = value.dataset.id;        

        let obj = JSON.parse(sessionStorage.beneficiarios);
        let excluir = obj.findIndex(x => x.CPF_ == cpf);
        obj.splice(excluir, 1);        

        sessionStorage.clear();
        sessionStorage.setItem("beneficiarios", []);
        sessionStorage.setItem("beneficiarios", JSON.stringify(obj));

        var tr = $(value).closest('tr');
        tr.remove();
        return false;
    };
})(jQuery);