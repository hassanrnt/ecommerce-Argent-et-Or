import React from 'react';

const CartItem = ({item}) => {
  // destructure item
  const {id, title, image, price, amount} = item;
  return <div>
    <div>
      {/* image */}
      <div>
        <img src={image} alt=''/>
      </div>
    </div>
  </div>;
};

export default CartItem;
