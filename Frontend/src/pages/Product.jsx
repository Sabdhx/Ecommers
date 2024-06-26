import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/carts/cartSlice";
import { fetchingApi } from "../features/products/productSlice";

function Products() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);
   
  useEffect(() => {
    dispatch(fetchingApi());
  }, [dispatch]); // Empty dependency array ensures this effect runs only once after initial render

  const handleAddCart = (product) => {
    const newObj = { ...product, quantity: 1 };
    dispatch(addCart(newObj));
    console.log("hellow");
  };

  const array = [
    { id: 1, img: "abc", title: "xyz", rating: 1, rate: 1, price: 34 },
  ];

   if(!products){
    return <p>Loading...</p>
   }


  return (
    <div className="bg-white">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {error && <div>{error}</div>}
            { products?.map((product) => (
              <div key={product.id} className="flex flex-col">
                <Link
                  to={`/SingleProduct/${product.id}`}
                  className="group relative"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.images[1]}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex gap-5 justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        rating :{product.rating.rate}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}$
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddCart(product)}
                  className="bg-blue-400 py-1 px-5 text-white"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
