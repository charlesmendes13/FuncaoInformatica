using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebAtividadeEntrevista.Helpers;

namespace WebAtividadeEntrevista.Models
{
    public class BeneficiarioModel
    {
        public long Id_ { get; set; }

        /// <summary>
        /// Nome
        /// </summary>
        [Required]
        public string Nome_ { get; set; }

        /// <summary>
        /// CPF
        /// </summary>
        [Required]
        [RegularExpression(@"[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}", ErrorMessage = "Digite um CPF válido")]       
        public string CPF_ { get; set; }
    }
}