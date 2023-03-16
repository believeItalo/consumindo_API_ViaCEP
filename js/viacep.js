
export const pesquisarcep = async (cep) =>{
    const url = (`http://viacep.com.br/ws/${cep}/json/`)
    const response = await fetch(url)
    const data = await response.json()
    
    
    return {
        municipio: data.localidade,
        estado: data.uf,
        ...data
    }
}
pesquisarcep("06606270")

