function VerificarExistenciaBeneficiario(strCPF) {

    let resultado = false;
    let cpf = strCPF;

    let beneficiarios = sessionStorage.getItem("beneficiarios") == "" ? [] : JSON.parse(sessionStorage.getItem("beneficiarios"));

    if (beneficiarios.length > 0) {
        beneficiarios.some(function (e) {
            if (e.CPF_ == cpf) {
                resultado = true;
                return true;
            }
        })
    }
    
    return resultado;
}