"use client";

import Link from "next/link";
import { useUserId } from "./GetUser";
import { useEffect, useState } from "react";
import { getProducts } from "../actions/get-products";
import { addToBasket } from "../actions/put-in-basket";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  userId: string;
};

function Product(props: ProductProps) {
  const truncateDescription = (description: string) => {
    const lines = description.split("\n");
    if (lines.length > 4) {
      return lines.slice(0, 4).join("\n") + "...";
    }
    return description;
  };

  const onSubmit = async (productId: number, userId: string) => {
    addToBasket(productId, userId);
  };

  return (
    <div className="block bg-white border border-gray-200">
      <form className="flex flex-col h-full p-6">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">{props.name}</h1>
          <div className="text-lg font-semibold text-slate-500">
            {props.price}
          </div>
        </div>
        <p className="text-sm text-slate-700 flex-grow">
          {truncateDescription(props.description)}{" "}
        </p>
        <div className="flex items-baseline mb-4 pb-6 border-b border-slate-200"></div>
        <div className="flex items-end mt-auto space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-[#96C8FF] hover:text-black text-white flex justify-center items-center"
            type="button"
            onClick={() => onSubmit(props.id, props.userId)}
          >
            Pridať
          </button>
          <Link
            href={`/shop/${props.id}`}
            className="h-10 px-6 font-semibold rounded-md bg-[#96C8FF] hover:text-black text-white flex justify-center items-center"
          >
            Podrobnosti
          </Link>
        </div>
      </form>
    </div>
  );
}

export function ProductList() {
  const userId = useUserId();
  const [products, setProducts] = useState<any[]>([]);
  const fetchData = async () => {
    const profileAppointments = await getProducts();
    setProducts(profileAppointments);
  };
  useEffect(() => {
    fetchData();
  }, [userId]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <Product
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description}
          price={p.price}
          userId={userId}
        />
      ))}
    </div>
  );
}
