import '../pages.css'
import getCostumers from '../clientes/getCostumers.js'
import listSales from './listSales.js'
import setSales from './setSales.js'

import { useEffect, useState } from 'react';

function AddSales() {

 const sales = {
  costumers: " ",
  data:  "",
  isPaga: false,
  value: 0
 }


  let [listCostumers,setListCostumers] = useState([]);
  let [selectDado,setSelectDado] = useState("")


 useEffect(() => {
  const costumers = getCostumers();
  if(costumers){
    setListCostumers(costumers);
  }},[])



function handleSales(){

  const arrCostumers = document.querySelector("#name");
  const finalCostumers = arrCostumers.value;

  const salesDate = document.querySelector("#date");
  const finalDate = salesDate.value;

  const salesValue = document.querySelector("#salesValue");
  const finalSalesValue = salesValue.value

 sales.costumers = finalCostumers;
 sales.data = finalDate;
 sales.value = finalSalesValue

  console.log(sales);
  console.log("Adicionado no array!");

  listSales.push(sales);

  console.log(listSales);

  setSales();




  
}
     


  return (
    <>
   

   <form id='clientes-form'>
   <p>Informe dados para cadastro</p>
      <div className="div-costomers-form">
        <label>Selecione a empresa</label>
        <select name="name" id="name" >
         {
          listCostumers.map((costumers) => (
            <option value={costumers.name}>{costumers.name}</option>
          ))
         }
        </select>
      </div>


      <div className="div-costomers-form">
      <label>Informe a data da venda</label>
        <input type="date" id="date" placeholder='Data da venda' required/>
      </div>

      <div className="div-costomers-form">
      <label>Informe o valor da venda</label>
        <input type="number" id='salesValue' placeholder='Valor da Venda' required/>
        
      </div>

      <div className="div-costomers-form">
          <button onClick={handleSales} id='costomers-form-button'>Adicionar</button>
        </div>

     

   
   </form>

  
      
  

          
    </>
  )
}

export default AddSales;