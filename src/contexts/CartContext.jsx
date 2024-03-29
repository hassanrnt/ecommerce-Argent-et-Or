import React, {createContext,useState, useEffect} from 'react';

export const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // item amount state
  const[itemAmount, setItemAmount] = useState(0);
  // total price state
  const[total, setTotal] = useState(0);
  useEffect(()=>{
  const total = cart.reduce((accmulator,currentItem)=> {
    return accmulator + currentItem.price * currentItem.amount;
  },0);
  setTotal(total);
  })
  // update item amount
  useEffect(()=>{
    if(cart) {
    const amount = cart.reduce((accmulator, currentItem)=>{
      return accmulator + currentItem.amount;
    },0);
    setItemAmount(amount);
    }
  }, [cart])

  const  addToCart = (product,id)=>{
    const newItem = { ...product,amount:1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if(cartItem){
      const newCart = [...cart].map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1}
        } else{
          return item;
        }
      });
      setCart(newCart);
      
    } else {
      setCart([...cart, newItem]);
    }
    
  }
  // remove from cart
  const removeFromCart = (id) => {
    let newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  };

  // clear cart 
  const clearCart = ()=> {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) =>{
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) =>{
    const cartItem = cart.find(item =>{
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map(item =>{
        if (item.id === id) {
          const newAmount = Math.max(cartItem.amount - 1, 1);
          return { ...item, amount: newAmount };
        }
        
        else{ 
          return item;
        }
      });
      setCart(newCart);
    }else{
      if(cartItem.amount < 2){
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,total,}}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
