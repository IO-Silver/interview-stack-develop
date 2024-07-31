import React from 'react';
import { Product } from '../interfaces';

const ProductItem = (props: Product) => (
  <div
    ref={props.draggableProvided.innerRef}
        {...props.draggableProvided.draggableProps}
        {...props.draggableProvided.dragHandleProps}
    className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
  >
    <span>{ props.ProductID }</span>
    <span>{ props.ProductName}</span>
    <img src={ props.ProductPhotoURL } className='object-cover h-48 w-96'/>
  </div>
);

export default ProductItem;