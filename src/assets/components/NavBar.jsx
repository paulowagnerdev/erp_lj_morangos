import './NavBar.css';

function NavBar() {
  return (
    <div className='Navbar' >
        <div className="logo"><a href="/">ICON</a></div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Produto</a></li>
            <li><a href="/">Armazem</a></li>
        </ul>
    </div>
  )
}

export default NavBar