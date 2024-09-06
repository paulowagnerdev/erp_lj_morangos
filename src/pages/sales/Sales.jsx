import './Sales.css'
import '../pages.css'
import SalesComponent from './SalesComponent';
import AddSales from './AddSales';
import { useState } from 'react';
import { FaPlusCircle  } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";



function Sales() {

  let [showList,setShowList] = useState(true);


  return (
  <>
    <header className="page-header" id='pageHeaderSales'>
        <div>
          <h2>Vendas</h2>
        </div>
        <input type="text" id='inputTextSales' placeholder='Digite para filtrar...' />
    </header>

  
    {
      showList ?
      <>
        <div className="div-main-sales">
        <div className="display-sales">
        <p>Nº da venda</p>
        <p id='costumers-name'>Nome do Cliente</p>
        <p>Status</p>
        <p>Valor em Vendas</p>
        </div>
        </div>
        <SalesComponent/>  
        <div className="button-plus">
        <FaPlusCircle onClick={() => setShowList(!showList)}/>
        </div>
      </>
           :
           <>
           <AddSales/>
           <div className="button-plus">
           <IoMdReturnLeft onClick={() => setShowList(!showList)}/>
           </div>
           
           </>
    }
   
  </>
  )
}

export default Sales