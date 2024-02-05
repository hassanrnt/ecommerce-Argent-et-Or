import React, {useContext} from 'react';
// import useParams
import {useParams} from 'react-router-dom';
// import cart context
import {CartContext} from '../contexts/CartContext';
// import product context
import {ProductContext} from '../contexts/ProductContext';




const ProductDetails = () => {
  // get the product id from the url
  const {id} =useParams()
  const {products}=useContext(ProductContext);
  const {addToCart}=useContext(CartContext);
  // get the single product based on the id
  const product = products.find(item =>{
    return item.id === parseInt(id);
  });


  // if product is not found
  if (!product) {
   return <section className='h-screen flex justify-center items-center'>
    Loading...</section>;
  }
   // destructure product
   const {title, price, decription, image} = product;
  return <section className='pt-32 pb lg:py-32 h-screen flex items-center'>
    <div className="container mx-auro">
      {/* image & text wrapper */}
      <div className='flex flex-col lg:flex-row items-center'>
        {/* image */}
      <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
        <img  className=' max-w-[200px] lg:max-w-sm'src={image} alt=''/>
      </div>
      {/* text */}
      <div>text</div>
      </div>
    </div>
  </section>;

};

export default ProductDetails;
