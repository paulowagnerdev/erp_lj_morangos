import ArrCostumers from './listCostumers.js'

function setCostumers(){

        const carregarDado = localStorage.getItem("userObj");
        const finalDado = JSON.parse(carregarDado);

        let costumers = [];

        if(finalDado!=null){
            for(let i=0;i<=finalDado.length-1;i++){
                costumers.push(finalDado[i]);
            }
        }

        costumers.push(ArrCostumers.pop());


           
        localStorage.setItem("userObj", JSON.stringify(costumers));

    
            console.log("Dado Armazenado!");
            console.log(costumers);
           
     
}

export default setCostumers;

/* react router hook form */