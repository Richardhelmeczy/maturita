"use client";

import { useEffect, useState } from "react";
import { useUserId } from "./GetUser";
import { getUserBasket } from "../actions/get-user-basket";

export default function Basket() {
  const userId = useUserId();
  console.log(userId);
  const [UserProducts, setUserProducts] = useState<any[]>([]);
  useEffect(() => {
    if (userId !== "") {
      const fetchData = async () => {
        const profileAppointments = await getUserBasket(userId);
        setUserProducts(profileAppointments);
      };
      fetchData();
    }
  }, [userId]);

  return (
    <div className="flex min-h-[91vh] flex-col items-center p-10">
      <p className="font-bold text-3xl">Košík</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {UserProducts.map((pr) => (
          <div
            key={pr.id}
            className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div>
              {pr.name} {pr.lastname} {pr.price}€
            </div>
            <div>{pr.appointmentDate}</div>
            <button
              className="button my-auto"
              //onClick={() => removeProuct(appo.id)}
            >
              Zrušiť
            </button>
          </div>
        ))}
      </div>
      <button
        className="secondary mt-4"
        //onClick={() => removeProuct(appo.id)}
      >
        Kúpiť -{" "}
        {Math.floor(
          100 *
            UserProducts.reduce(
              (accumulator, currentItem) => accumulator + currentItem.price,
              0
            )
        ) / 100}
        €
      </button>
    </div>
  );
}
