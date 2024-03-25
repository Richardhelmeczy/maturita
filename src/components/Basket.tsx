"use client"

import { useEffect, useState } from "react";
import { useUserId } from "./GetUser";
import { getUserBasket } from "../actions/get-user-basket";


export default function Basket() {
  const userId = useUserId()
  console.log(userId)
  const [UserProducts, setUserProducts] = useState<any[]>([]);
  useEffect(() => {
    if (userId !== '') {
      const fetchData = async()=>{
        const profileAppointments = await getUserBasket(userId)
        setUserProducts(profileAppointments)}
      fetchData()
    }
  }, [userId]);
  
  
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <p>Basket:</p>
      <div className="grid grid-cols-3 gap-4">
        {UserProducts.map((pr) => (
            <div key={pr.id} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div>{pr.name} {pr.lastname}:{pr.price}€</div>
              <div>{pr.appointmentDate}</div>   
            <button
              className="bg-red-500 text-white rounded hover:bg-red-700 p-2"
              //onClick={() => removeProuct(appo.id)}
            >
              Cancel
            </button>
            </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white rounded hover:bg-blue-700 p-2 m-4 px-3"
        //onClick={() => removeProuct(appo.id)}
      >
        Buy - {Math.floor(100*(UserProducts.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)))/100}€
      </button>
    </div>
  )
};
