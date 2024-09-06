import './NavBar.css';
import { WiMeteor } from "react-icons/wi";
import { ImHome3 } from "react-icons/im";
import { ImCoinDollar } from "react-icons/im";
import { FaWarehouse } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";


// eslint-disable-next-line react/prop-types
const NavBar = ({show}) => {

   return (
    <div className={show ? 'Navbar active':'Navbar'} >
        <div className="logo">
          <WiMeteor />
          </div>
          <div className="line"></div>
        <ul>
            <li><a href="/">Home <ImHome3/></a></li>
            <li><a href="/customers">Clientes<RiCustomerService2Line /></a></li>
            <li><a href="/sales">Vendas<ImCoinDollar /></a></li>
            <li><a href="/warehouse">Armazem<FaWarehouse /></a></li>
        </ul>
    </div>
  )
}

export default NavBar