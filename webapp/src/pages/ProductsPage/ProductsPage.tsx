import React, { useEffect } from "react";
import { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import { Product, ProductData } from "../../components/interfaces";
import { getProductData } from "../ApiHelper";
import Spinner from "../../components/Spinner/Spinner";
import ProductList from "../../components/ProductList/ProductList";
import PageWrapper from '../PageWrapper';

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState({Active: [], InActive: []} as ProductData);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productData, errorOccured } = await getProductData();
    setData(productData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  const handleDragEnd = (result: any) => {};


  useEffect(() => {
    getProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div className="flex flex-row justify-center w-full pt-4">
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
      <div className="flex flex-row justify-center w-full pt-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <ProductList
            ID='0'
            listTitle='Active'
            items={data.Active}
          />
        </DragDropContext>
      </div>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return (
    <PageWrapper>
      { content }
    </PageWrapper>
  );
};

export default ProductsPage;
