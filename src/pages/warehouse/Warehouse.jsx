import { useEffect, useState } from 'react';
import CardComponent from '../home/CardComponent';
import './Warehouse.css'
import arrWarehouse from  './listWarehouse.js';
import setWarehouse from './setWarehouse.js';
import getWarehouse from './getWarehouse.js';



import { GiStrawberry } from "react-icons/gi";

function Warehouse() {

  let [qdt,setQtd] = useState(5)
  let finalProducts = 0;

  useEffect(() => {


    const qdtProducts = getWarehouse();
  
    if(qdtProducts){
  
      let value = 0;
  
      for(let i=0;i<qdtProducts.length;i++){
        console.log("executou")
       value = value + parseInt(qdtProducts[i].qtd)
       console.log(i);
      }
  
      finalProducts = value;
  
      setQtd(finalProducts);
    }
  
  },[])



  const product = {
    id: 0,
    qtd: 0,
    dataDeCompra: "",
    dataDeVencimento: ""
  }



  function handleQdt(e){
    product.qtd = e.target.value;
  }

  function handleDataDeCompra(e){
    product.dataDeCompra = e.target.value;
  }
  function handleDataDeVencimento(e){
    product.dataDeVencimento = e.target.value;
  }

  function handleProducts(){
    arrWarehouse.push(product);
    setWarehouse();

    console.log(arrWarehouse);
  }


  return (
    <>
    <header className="page-header">
        <div>
          <h2>Armazém</h2>
        </div>
        
    </header>
    
    
    <div className="div-label-warehouse">
    <p>Iserir morangos em estoque</p>
      <form id='form-warehouse' >


      <div className="div-input">
      <label>Quantidade</label>
      <input type="number" required onChange={handleQdt} />
      </div>

      <div className="div-input">
      <label>Data de compra</label>
      <input type="date" required onChange={handleDataDeCompra} />
      </div>

      <div className="div-input">
      <label>Data de vencimento</label>
      <input type="date" required onChange={handleDataDeVencimento}/>
      </div>

      <button id='warehouse-button' onClick={handleProducts} >Adicionar</button>

      </form>

     
    </div>

    <div className="warehouse-div">
    <div className="card-size">
          <CardComponent 
          nome={"Produtos em estoque"} 
          icon={<GiStrawberry/>}
          value={qdt}
          fontSizeCard='35px'
          />
      </div>
    </div>

    </>
  )
}

export default Warehouse