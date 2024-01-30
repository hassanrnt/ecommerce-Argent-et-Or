import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs';
// import Link
import {Link} from 'react-router-dom';
// import Logo
import Logo from '../img/Logo.svg';

const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const {itemAmount} =useContext(CartContext);

  return (
    <header className='bg-pink-200'>
      <Link to ={'/'}>
        <div>
          <img className='w-[40px]' src={Logo} alt="" />
        </div>
      </Link>
      {/* cart */}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute-right-2-buttom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </header>
  );
};

export default Header;
