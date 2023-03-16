'use strict'
import { pesquisarcepPostMon } from "./postmon.js"

const preencherFormulario = async () => {
   const cepDigitado = document.getElementById('cep').value
   const cep = await pesquisarcepPostMon(cepDigitado)
   document.getElementById('endereco').value = cep.logradouro
   document.getElementById('bairro').value = cep.bairro
   document.getElementById('cidade').value = cep.municipio
   document.getElementById('estado').value = cep.estado
}
document.getElementById('cep').addEventListener('blur', preencherFormulario)
