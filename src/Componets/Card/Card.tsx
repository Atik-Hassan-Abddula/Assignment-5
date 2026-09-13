import { useState } from "react"
import type { CardType } from "../../CardType"

export interface CardProps {
    card: CardType
    handelcounter :(count:CardType)=> void
}

export default function Card({ card,handelcounter  }: CardProps) {

    const [addcard,setAddcart]=useState <Boolean>(false)

    const handeladdcard=()=>{
           setAddcart(!addcard)
           handelcounter(card)
    }
    

    return (
        
        <div className="container mx-auto px-8 flex">
           {
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                {/* {Icon + Badge} */}
                <div className=" flex justify-between items-center mb-4">
                  
                  <img src={card.icon} alt={card.name}
                  className="w-12 h-12 object-contain" />
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {card.badge}
                  </span>
                </div>
                {/* name */}
                <h2 className="text-xl font-bold mb-2">
                    {card.name}
                </h2>
                {/* category */}
                <p className="text-sm text-gray-500 mb-3">
                    {card.category}
                </p>
                {/* Descripitio */}
                <p className="text-gray-600 mb-4">
                    {card.description}
                </p>
                {/* Rating and Difficult */}
                <div className=" flex justify-between items-center">
                    <span className=" text-yellow-500">
                      ⭐{card.rating}
                    </span>
                    <span className="text-sm font-medium text-gray-700"> 
                         {card.difficulty}
                    </span>
                </div>
                {/* Button */}
                <button onClick={handeladdcard} className="w-full mt-5 bg-black text-white py-2 rounded-lg hover:bg-gray-500">
                   {addcard? " ✅Add to Stock":"Add to Stock"}
                </button>

            </div>
           }
         
        </div>
    )
}