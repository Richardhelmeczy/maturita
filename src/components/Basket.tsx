"use client";

import { useEffect, useState } from "react";
import { useUserId } from "./GetUser";
import { getUserBasket } from "../actions/get-user-basket";
import { removeProduct } from "../actions/remove-product";

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

  const onSubmit = (id: number) => {
    try {
      removeProduct(id);
    } catch (error) {
      console.log("aaaaaa ", error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <div className="flex min-h-[91vh] flex-col items-center p-10">
      <p className="font-bold text-3xl">Košík</p>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {UserProducts.map((pr) => (
          <div
            key={pr.id}
            className="flex max-w-sm p-6 justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div>
              {pr.name} {pr.lastname} <br /> {pr.price}€
            </div>
            <div>{pr.appointmentDate}</div>
            <button
              className="button my-auto"
              onClick={() => onSubmit(pr.id)}
            >
              Zrušiť
            </button>
          </div>
        ))}
      </div>
      <button
        className="secondary mt-4"
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
