import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";

export default function Product({hasPrime, title,description,image,category,rating,price}) {
  const ratingNum = Math.floor(rating.rate);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 italic text-xs text-gray-400">{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className="my-3">{title}</h4>

        <div className="flex">
            {[...Array(ratingNum)].map((_,i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs  my-2 line-clamp-2">{description}</p>
        <div className="mb-5">
            <Currency quantity={price} currency="GBP" />
        </div>
        {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
                <img src="/prime-logo.png" alt="prime" />
                <p className="text-xs text-gray-50">FREE NEXT-day Delivery</p>
            </div>
        )}
        <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}
