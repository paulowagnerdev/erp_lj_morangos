import './Clientes.css'
import '../pages.css'
import CostumersComponent from './CostomersComponent';
import AddClientes from './AddClientes';
import { useState } from 'react';
import { FaPlusCircle  } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";



function Clientes() {

  let [showList,setShowList] = useState(true);


  return (
  <>
    <header className="page-header" id='pageHeaderClientes'>
        <div>
          <h2>Clientes e Fornecedores</h2>
        </div>
        <input type="text" id='inputText' placeholder='Digite para filtrar...' />
    </header>

  

    {
      showList ?
      <>
        <div className="div-main">
        <div className="display">
        <p id='costumers-name'>Nome</p>
        <p>CJNP/CPF</p>
        <p>Status</p>
        <p>E-mail</p>
        </div>
        </div>
        <CostumersComponent/>  
        <div className="button-plus">
        <FaPlusCircle onClick={() => setShowList(!showList)}/>
        </div>
      </>
           :
           <>
           <AddClientes/>
           <div className="button-plus">
           <IoMdReturnLeft onClick={() => setShowList(!showList)}/>
           </div>
           
           </>
    }
   
  </>
  )
}

export default Clientes