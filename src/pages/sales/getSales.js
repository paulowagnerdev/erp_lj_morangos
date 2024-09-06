function getSales(){

    const carregarDado = localStorage.getItem("salesObj")

    const finalDado = JSON.parse(carregarDado);

    return finalDado;
     
    
}

export default getSales;