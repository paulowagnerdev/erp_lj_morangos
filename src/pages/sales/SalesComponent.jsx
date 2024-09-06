import { useEffect, useState } from 'react';
import './Sales.css'
import getSales from './getSales';



function SalesComponent() {

  let [listSales,setlistSales] = useState([]);


 useEffect(() => {
  const sales = getSales();
  if(sales){
    setlistSales(sales);
  }
   
  },[])

  return (

       <>
          <span id='span-client-exibe'>Exibindo o total de {listSales.length} Vendas Registrada(s)</span>
           <div className="div-list-container-sales">
           {
            

              listSales.map((sales) => (
                <div className="sales" key={sales.id} >
                   <div className="display-sales">
                    <p>{listSales.length-1}</p>
                    <p id='costumers-name'>{sales.costumers}</p>
                    {
                      sales.isPaga ? <><p>Pago</p></> : <><p>Não Pago</p></>
                    }
                    <p>R$ {sales.value},00</p>
                 </div>
                
                </div>
            ))
           }
           </div>

         
       </>
           
       

      
  )
}

export default SalesComponent;
