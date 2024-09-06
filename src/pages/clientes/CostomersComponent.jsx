import { useEffect, useState } from 'react';
import './Clientes.css'
import getCostumers from './getCostumers.js'


function CostumersComponent() {

  let [listCostumers,setListCostumers] = useState([]);


 useEffect(() => {
  const costumers = getCostumers();
  if(costumers){
    setListCostumers(costumers);
  }
   
    
  },[])

  return (

       <>
            <span id='span-client-exibe'>Exibindo o total de {listCostumers.length} Clientes Registrado(s)</span>
           <div className="div-list-container">
           {
            

              listCostumers.map((costumers) => (
                <div className="costumers" key={costumers.id} >
                      <p id='costumers-name'>{costumers.name}</p>
                      <p >{costumers.cnpjCpf}</p>
                      {costumers.isActive ? <p>Ativo</p> : <p>Inativo</p>}
                      <p >{costumers.email}</p>
                </div>
            ))
           }
           </div>

         
       </>
           
       

      
  )
}

export default CostumersComponent;
