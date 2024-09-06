import listSales from './listSales.js'

function setSales(){


    const carregarDado = localStorage.getItem("salesObj");
    const finalDado = JSON.parse(carregarDado);

        let sales = [];

        if(finalDado!=null){
            for(let i=0;i<=finalDado.length-1;i++){
                sales.push(finalDado[i]);
            }
        }

        sales.push(listSales.pop());


           
        localStorage.setItem("salesObj", JSON.stringify(sales));

    
            console.log("Dado Armazenado!");
            console.log(sales);
           
}

export default setSales;