import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logos/logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [open, setOpen] = useState(false);

    const NavItems = [
      {name: "Home", path: "register"},
      {name: "How It Works", path: ""},
      {name: "Find Work", path: ""},
      {name: "Hire Talent", path: ""},
      {name: "About", path: ""},
      {name: "Contact", path: ""},
      {name: "Login", path: ""}
    ]

  return (
    <header className='flex justify-between md:items-center bg-black text-pretty h-15 relative'>
       <div className='flex items-center'>
         <img src={Logo} alt="workconnect-logo" className='size-10 md:size-15'/>
          <h2 className='text-white font-bold cursor-pointer'>WorkConnect</h2>
       </div>
       <div className='md:hidden text-white text-xl p-2 self-center' onClick={() => setOpen(true)}><FontAwesomeIcon icon={faBars} /></div>
       <nav  className={`absolute w-full flex flex-col p-4 text-xl bg-black font-medium transition-transform duration-700 ease-in-out z-20 
        md:w-auto md:flex-row md:h-auto md:relative md:p-2 md:opacity-100 md:translate-0 ${open ? "h-screen opacity-100 translate-y-0 text-3xl" : "opacity-0 -translate-y-100"}`}>
          <div className='text-right md:hidden'><FontAwesomeIcon icon={faTimes} className='text-white '
          onClick={() => setOpen(false)}
          />
          </div>
            { NavItems.map((item) => (
            <NavLink key={item.name} to={item.path} className={"text-white p-2 text-center text-3xl md:text-xl"}>
              {item.name}
            </NavLink>
            ))}
       </nav>
       <Link to="register" className='text-white'>
       <button className='bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition hidden md:block'
       >Get Started</button></Link>
       
    </header>
  )
}

export default Navbar
