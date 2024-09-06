import '../pages.css'
import './CostomersComponent'

import ArrCostumers from './listCostumers.js'
import setCostumers from './setCostumers.js'
import getCostumers from './getCostumers.js'

function AddClientes() {

  const newCostumers = {id: ArrCostumers.length + 1,
    name: '',
    cnpjCpf: '',
    isActive: true, 
    sales: 0,
    email: '',
    cep: '',
    telefone: ''};

  function handleSetName(e){
    newCostumers.name = e.target.value;
    console.log(newCostumers);
  }

  function handleSetcnpjCpf(e){
    newCostumers.cnpjCpf = e.target.value;
    console.log(newCostumers);
  }

  function handleSetEmail(e){
    newCostumers.email = e.target.value;
    console.log(newCostumers);
  }






  function handleSetCostumers(){

    if(newCostumers.name){

      ArrCostumers.push(newCostumers);

      console.log(newCostumers);
      console.log(ArrCostumers)
      setCostumers();
  
    }

  
    
  }



  


  return (
    <>
   

   <form id='clientes-form'>
   <p>Informe dados para cadastro</p>

      <div className="div-costomers-form">
      <label>Informe o nome da empresa</label>
        <input type="text" id='input-name' onChange={handleSetName} placeholder='Empresa LTDA' required/>
      </div>

      <div className="div-costomers-form">
      <label>Informe o CNPJ OU CPF</label>
        <input type="text" onChange={handleSetcnpjCpf} placeholder='ex: 354.554.65/0001-54 ou 100.546.545-54' required/>
      </div>

      <div className="div-costomers-form">
      <label>Informe o E-mail</label>
        <input type="email" onChange={handleSetEmail} placeholder='ex: empresa@ltda.com' required/>
      </div>

      <div className="div-costomers-form">
         <label>Informe o CEP</label>
          <input type="text" placeholder='ex: 89250-150' required/>
       </div>

        <div className="div-costomers-form">
        <label>Informe o telefone</label>
           <input type="text" placeholder='ex: (55) 9 9545-5454' required/>
        </div>       

        <div className="div-costomers-form">
          <button onClick={() => handleSetCostumers()} id='costomers-form-button'>Adicionar</button>
          </div>
      
   </form>

          
    </>
  )
}

export default AddClientes