import './home.css'
import '../pages.css'
import CardComponent from './CardComponent'
import { GiStrawberry } from "react-icons/gi";
import { ImCoinDollar } from "react-icons/im";
import { FaWarehouse } from "react-icons/fa";
import getSales from '../sales/getSales';
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {

  //let [productValue, setProductValue] = useState(85);
  const userName = 'root'

  let finalSales = 0;
  let [sales,setSales] = useState(0);


 useEffect(() => {

  

  const sales = getSales();

  if(sales){

    let value = 0;

    for(let i=0;i<sales.length;i++){
      console.log("executou")
     value = value + parseInt(sales[i].value)
     console.log(i);
    }

    finalSales = value;

    setSales(finalSales);
  }

},[])
  

  return (
    <>
    <header className="page-header">
      <span>Olá,  {userName} seja vem vindo :) </span>
      
    </header>
   

    <div className="div-global-card">

      <div className="card-size">
          <CardComponent 
          nome={"Produtos em estoque"} 
          icon={<GiStrawberry/>}
          value={15}
          fontSizeCard='35px'
          />
      </div>

      <div className="card-size">
          <CardComponent 
          nome={"Vendas Realizadas"} 
          icon={<ImCoinDollar/>}
          value={'R$' + sales}
          fontSizeCard='20px'
          />
      </div>

      <div className="card-size">
          <CardComponent 
          nome={"Produtos em Vencimentos"} 
          icon={<FaWarehouse/>}
          value={25}
          fontSizeCard='35px'
          />
      </div>

    </div>
    </>
  )
}

export default Home