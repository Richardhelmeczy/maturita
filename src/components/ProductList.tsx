"use client"

import Link from 'next/link'
import { useUserId } from './GetUser'
import { useEffect, useState } from 'react'
import { getProducts } from '../actions/get-products'
import { addToBasket } from '../actions/put-in-basket'

type ProductProps = {
  id: number
  name: string
  description: string
  price: number
  userId:string
}

function Product(props: ProductProps) {

  const onSubmit = async (productId: number,userId:string) => {
    addToBasket(productId,userId)
  }
  return (
    <div className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2">
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">{props.name}</h1>
          <div className="text-lg font-semibold text-slate-500">{props.price}</div>
        </div>
        <p className="text-sm text-slate-700">{props.description}</p>
        <div className="flex items-baseline mt-4 mb-4 pb-6 border-b border-slate-200"></div>
        <div className="flex-auto flex space-x-4">
          <Link
            className="h-10 px-6 font-semibold rounded-md bg-black text-white flex justify-center items-center"
            type="submit"
            href={''}
            onClick={() => addToBasket(props.id,props.userId)}
          >
            <span>Add</span>
          </Link>
          <Link
            href={`/shop/${props.id}`}
            className="h-10 px-6 font-semibold rounded-md bg-black text-white flex justify-center items-center"
          >
            <span>Details</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export function ProductList() {
  const userId=useUserId()
  const [products, setProducts] = useState<any[]>([]);
  const fetchData = async () => {
    if (userId !== '') {
      const profileAppointments = await getProducts();
      setProducts(profileAppointments);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <Product key={p.id} id={p.id} name={p.name} description={p.description} price={p.price} userId={userId} />
      ))}
    </div>
  )
}
