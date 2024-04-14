"use client"

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getProducts } from '../../actions/get-products';
import { deleteproduct } from '../../actions/delete-product';
import { getDoctors } from '../../actions/get-doctors';
import { createProduct } from '../../actions/add-product';

// Define form data types
type LoginFormData = {
  name: string;
  password: string;
};

type ProductFormData = {
  product_name: string;
  description: string;
  price: number;
};

export default function Admin() {
  const { register: loginRegister, handleSubmit: handleLoginSubmit } = useForm<LoginFormData>();
  const { register: productRegister, handleSubmit: handleProductSubmit } = useForm<ProductFormData>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contentToShow, setContentToShow] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);

  const fetchData = async () => {
    const products = await getProducts();
    setProducts(products);
    const doctors = await getDoctors();
    setDoctors(doctors);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const onSubmitLogin = handleLoginSubmit((data) => {
    if (data.name === "admin" && data.password === "admin") {
      setIsAuthenticated(true);
    }
  });

  const onSubmitProduct = handleProductSubmit(async (data) => {
    await createProduct(data)
    fetchData()
  });

  const handleproductsAdd = () => {
    setContentToShow('productsAdd');
  };

  const handleShowProducts = () => {
    setContentToShow('products');
  };

  const handleShowDoctors = () => {
    setContentToShow('doctors');
  };

  const handleDeleteProduct = async (id: number) => {
    await deleteproduct(id);
    fetchData();
  };

  return (
    <main className="flex flex-col items-center text-center p-3">
      {!isAuthenticated ? (
        <form onSubmit={onSubmitLogin} className="flex h-[91vh] flex-col justify-center items-center p-24">
          <label>Meno</label>
          <input {...loginRegister('name')} className='border-2 border-l-slate-200' />
          <label>Heslo</label>
          <input {...loginRegister('password')} className='border-2 border-l-slate-200' />
          <input type="submit" value="Prihlasit" className="p-2 button mt-4 mx-auto" />
        </form>
      ) : (
        <div>
          <button onClick={handleShowProducts} className="m-2 p-2 bg-blue-500 text-white rounded">
            Produkty
          </button>
          <button onClick={handleShowDoctors} className="m-2 p-2 bg-blue-500 text-white rounded">
            Doktori
          </button>
          {contentToShow === 'products' && (
            <div className="flex flex-col items-center text-center p-3"> 
              <button className="bg-green-700 p-1 ml-3 rounded-xl" onClick={() => handleproductsAdd()}>Pridat</button> 
              {products.map((p) => (
                <div className='p-1' key={p.id}>
                    {p.name}-{p.price}€
                    <button className="bg-red-700 p-1 ml-3 rounded-xl" onClick={() => handleDeleteProduct(p.id)}>Delete</button>
                </div>
              ))}
            </div>
          )}
          {contentToShow === 'doctors' && (
            <div className="flex flex-col items-center text-center p-3 h-[91vh]">
              {doctors.map((d) => (
                <div className='p-1' key={d.id}>
                  {d.firstname} {d.lastname}
                </div>
              ))}
            </div>
          )}
          {contentToShow === 'productsAdd' && (
            <form onSubmit={onSubmitProduct} className="flex flex-col items-center h-[91vh]">
              <label>Meno</label>
              <input {...productRegister('product_name')} className='border-2 border-l-slate-200' />
              <label>Popis</label>
              <input {...productRegister('description')} className='border-2 border-l-slate-200' />
              <label>Cena</label>
              <input type="real" {...productRegister('price')} className='border-2 border-l-slate-200' />
              <input type="submit" value="Pridat produkt" className="p-2 button mt-4 mx-auto" />
            </form>
          )}
        </div>
      )}
    </main>
  );
}



