import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const {itemAmount} =useContext(CartContext);

  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
        <BsBag className='text-2xl' />
        <div className='bg-red-500 absolute-right-2-buttom-2 text-[]'>{itemAmount}</div>
      </div>
    </header>
  );
};

export default Header;
