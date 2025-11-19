

import Logo from '../../assets/logos/logo.png';

function Navbar() {


  return (
      <header className='bg-black text-pretty'>
        <div className='flex flex-1 items-center justify-between p-2'>
       <div className='flex items-center'>
         <img src={Logo} alt="workconnect-logo" className='size-15'/>
        <h2 className='text-white font-bold'>WorkConnect</h2>
       </div>
        </div>
      </header>
  )
}

export default Navbar
