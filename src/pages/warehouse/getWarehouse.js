function getWarehouse(){

    const carregarDado = localStorage.getItem("userObj")

    const finalDado = JSON.parse(carregarDado);

    return finalDado;
           
}

export default getWarehouse;