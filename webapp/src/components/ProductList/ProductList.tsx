import React from 'react';
import { DraggableProvided, Droppable, Draggable } from 'react-beautiful-dnd';
import ProductItem from '../ProductItem/ProductItem';
import { ProductListProps } from '../interfaces';

const ProductList = (props: ProductListProps) => (
  <Droppable droppableId={props.ID}>
    {
      (provided) => (
        <div
          ref={provided.innerRef}
          className='bg-neutral-500 p-4 w-full'
        >
          <h5 className='font-bold text-white'>
              {props.listTitle}
          </h5>
          {
            props.items.length > 0 && props.items.map((item, index) => (
              <Draggable
                key={item.ProductID}
                draggableId={`${item.ProductID}`}
                index={index}
              >
                {(provided: DraggableProvided) => (
                  <ProductItem
                    ProductID={item.ProductID}
                    ProductName={item.ProductName}
                    ProductPhotoURL={item.ProductPhotoURL}
                    ProductStatus={item.ProductStatus}
                    draggableProvided={provided}
                  />
                )}
              </Draggable>
              ))
          }
          {provided.placeholder}
         </div>
      )
    }
  </Droppable>
);

export default ProductList;