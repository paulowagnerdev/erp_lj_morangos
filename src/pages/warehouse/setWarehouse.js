import arrWarehouse from  './listWarehouse.js';

function setWarehouse(){

        const carregarDado = localStorage.getItem("wareObj");
        const finalDado = JSON.parse(carregarDado);

        let wareHouse = [];

        if(finalDado!=null){
            for(let i=0;i<=finalDado.length-1;i++){
                wareHouse.push(finalDado[i]);
            }
        }

        wareHouse.push(arrWarehouse.pop());


           
        localStorage.setItem("wareObj", JSON.stringify(wareHouse));

    
            console.log("Dado Armazenado!");
            console.log(wareHouse);
           
}

export default setWarehouse;